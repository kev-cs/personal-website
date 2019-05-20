const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const babelTsLoader = {
  loader: "babel-loader",
  options: {
    cacheDirectory: true,
    babelrc: false,
    presets: [
      [
        "@babel/preset-env",
        { targets: { browsers: "last 2 versions" } } // or whatever your project requires
      ],
      "@babel/preset-typescript",
      "@babel/preset-react"
    ],
    plugins: [
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      "react-hot-loader/babel"
    ]
  }
};

const config = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true
  },
  stats: "errors-warnings",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: babelTsLoader
      }
    ]
  }
});

module.exports = config;
