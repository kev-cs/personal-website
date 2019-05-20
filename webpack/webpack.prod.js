const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const babelTsLoader = {
  loader: "babel-loader",
  options: {
    babelrc: false,
    presets: [
      ["@babel/preset-env", { targets: { browsers: "last 2 versions" } }],
      "@babel/preset-typescript",
      "@babel/preset-react"
    ],
    plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]]
  }
};

const config = merge(commonConfig, {
  mode: "production",
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
