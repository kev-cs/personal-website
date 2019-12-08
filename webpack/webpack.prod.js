const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


const config = merge(commonConfig, {
  mode: "production",
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [new CompressionPlugin()]
});

module.exports = config;
