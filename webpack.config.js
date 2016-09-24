const webpack = require('webpack')
    , path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client');

var config = {
  devtool: 'eval',
  entry: [
    './client/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
    },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    }
    ]
  }
};

module.exports = config;
