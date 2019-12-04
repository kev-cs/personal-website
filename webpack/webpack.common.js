const HtmlWebPackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const buildPath = path.resolve(__dirname, "../dist");
const isDev = process.env.NODE_ENV === "development";

const babelTsLoader = {
  loader: "babel-loader",
  options: {
    cacheDirectory: isDev,
    babelrc: true,
    plugins: []
  }
};
if (isDev)
  babelTsLoader.options.plugins.push("react-hot-loader/babel");

const CSSLoader = {
  loader: "css-loader",
  options: {
    modules: true,
    sourceMap: true,
    importLoaders: 1,
    localIdentName: "[local]__[hash:base64:5]",
    camelCase: true
  }
};
const postCSSLoader = {
  loader: "postcss-loader",
  options: {
    ident: "postcss",
    sourceMap: true,
    plugins: () => [require("autoprefixer")()]
  }
};
const sassLoader = {
  loader: "sass-loader",
  options: {
    data: "@import \"settings.sass\";",
    sourceMap: true
  }
};

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".ts", ".tsx", ".sass", ".json", ".svg"],
    modules: ["node_modules", "src"],
    alias: {
      Assets: path.resolve(__dirname, "src/assets")
    }
  },
  output: {
    path: buildPath,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.([jt])sx?$/,
        exclude: /node_modules/,
        use: babelTsLoader
      },
      {
        test: /^((?!global).)*\.s[ac]ss$/,
        include: [path.resolve("src")],
        use: ["style-loader", CSSLoader, postCSSLoader, sassLoader]
      },
      {
        test: /global.*\.s[ac]ss$/,
        include: [path.resolve("src")],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            }
          },
          "css-loader", postCSSLoader, sassLoader]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
    new ForkTsCheckerWebpackPlugin({ eslint: true }),
    new MiniCssExtractPlugin(),
    new CopyPlugin([{ from: "public" }])
  ]
};
