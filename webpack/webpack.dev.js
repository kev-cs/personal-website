const merge = require("webpack-merge");
const StylelintPlugin = require("stylelint-webpack-plugin");

const config = merge(require("./webpack.common"), {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true
  },
  stats: "errors-warnings",
  plugins: [
    new StylelintPlugin({ emitErrors: false })
  ]
});

module.exports = config;
