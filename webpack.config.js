const path = require('path');
const webpack = require('webpack');
const { CleanWebPackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // Set the single-spa config as the project entry point
    'single-spa.config': '/single-spa.config.js',
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // Webpack style loader added so we can materialise
        test: /\.css/,
        use: ['style.loader', 'css-loader']
      }
    ]
  }
}