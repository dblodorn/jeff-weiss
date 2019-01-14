const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const FetchJsonWebpackPlugin = require('fetch-json-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')
const common = require('./webpack.common.js')
const {
  HTML_OPTIONS,
  PRODUCTION_ENDPOINT
} = require('./build.config.js')

const pathsToClean = [
  './dist'
]

const cleanOptions = {
  exclude: ['_redirects', '.htaccess'],
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
    new FetchJsonWebpackPlugin({
      endpoint: PRODUCTION_ENDPOINT,
      filename: 'data',
      hash: true,
    }),
    new CopyWebpackPlugin([
      {
        from: './assets/**/*',
        to: './'
      }
    ]),
    new HtmlWebpackPlugin({
      ...HTML_OPTIONS,
      template: './templates/index.prod.pug'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          return;
        }
        console.log(message);
      },
      minify: true,
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new WebpackShellPlugin({ 
      onBuildStart: [
        'echo "Webpack Start"'
      ],
      onBuildEnd: [
        'echo "Webpack End"',
        'gulp'
      ] 
    })
  ]
})
