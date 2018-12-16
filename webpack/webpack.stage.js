const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')
const { HTML_OPTIONS } = require('./build.config.js')

const pathsToClean = [
  './dist'
]

const cleanOptions = {
  exclude: ['_redirects'],
  root: process.cwd(),
  verbose: true,
  dry: false
}

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(
      pathsToClean,
      cleanOptions
    ),
    new CopyWebpackPlugin([
      {
        from: './assets/**/*',
        to: './'
      }
    ]),
    new HtmlWebpackPlugin({
      ...HTML_OPTIONS,
      template: './templates/index.dev.pug'
    })
  ]
})
