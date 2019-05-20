const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

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
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.scss$/,
        include: [path.resolve("src")],
        use: ["style-loader", CSSLoader, postCSSLoader, sassLoader]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ForkTsCheckerWebpackPlugin({ eslint: true })
  ]
};
