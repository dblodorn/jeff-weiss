const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    "core-js/modules/es6.promise",
    "core-js/modules/es6.array.iterator",
    path.join(__dirname, '../src', 'index.js'),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ExtendedAPIPlugin(),
    new LodashModuleReplacementPlugin({
      'shorthands': true,
      'flattening': true,
      'collections': true,
      'cloning': true,
    })
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0
    }
  }
}
