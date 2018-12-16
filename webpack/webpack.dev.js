const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common.js')
const { HTML_OPTIONS } = require('./build.config.js')

module.exports = merge(common, {
  devServer: {
    publicPath: "/",
    historyApiFallback: true
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      ...HTML_OPTIONS,
      template: './templates/index.dev.pug'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
