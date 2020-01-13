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
if (isDev) babelTsLoader.options.plugins.push("react-hot-loader/babel");

const cssLoader = {
  loader: "css-loader",
  options: {
    sourceMap: isDev,
    modules: true,
    importLoaders: 3,
    localIdentName: "[local]__[hash:base64:5]",
    camelCase: true
  }
};
const cssLoaderGlobalStyles = {
  loader: "css-loader",
  options: {
    importLoaders: 3
  }
};
const postCSSLoader = {
  loader: "postcss-loader",
  options: {
    ident: "postcss",
    plugins: () => [require("autoprefixer")()]
  }
};
const sassLoader = {
  loader: "sass-loader",
  options: {
    data: "@import \"settings.scss\";"
  }
};
const miniCssExtractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    hmr: isDev
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
        use: [miniCssExtractLoader, cssLoader, postCSSLoader, sassLoader]
      },
      {
        test: /global.*\.s[ac]ss$/,
        use: [miniCssExtractLoader, cssLoaderGlobalStyles, postCSSLoader, sassLoader]
      },
      {
        test: /\.(eot|gif|otf|png|ttf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
