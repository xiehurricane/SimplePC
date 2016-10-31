var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      'src',
      'node_modules',
    ],
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)([\?]?.*)$/,
      loader: 'url-loader'
    }, ],
  },
  plugins: ['transform-runtime', 'add-module-exports', 'antd'],

};
