const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const config = merge(commonConfig, {
  mode: "production"
});

module.exports = config;
