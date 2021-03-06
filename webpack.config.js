var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  mode: 'development',
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }, 
  module: {
    rules: [{
      test: /\.jsx?$/, 
      loader:'babel-loader'
    }]
  } 

};

module.exports = config;

