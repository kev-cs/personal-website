const HtmlWebPackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const isDev = process.env.NODE_ENV === "development";

const babelTsLoader = {
  loader: "babel-loader",
  options: {
    cacheDirectory: isDev,
    babelrc: false,
    presets: [
      [
        "@babel/preset-env",
        { targets: { browsers: "last 2 versions" } }
      ],
      "@babel/preset-typescript",
      "@babel/preset-react"
    ],
    plugins: [
      [
        "@babel/plugin-proposal-class-properties",
        { loose: true }
      ]
    ]
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
    sourceMap: true
  }
};

module.exports = {
  entry: ["./src/index.tsx"],
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
            options: { hmr: isDev }
          },
          "css-loader", postCSSLoader, sassLoader]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
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
    new MiniCssExtractPlugin()
  ]
};
