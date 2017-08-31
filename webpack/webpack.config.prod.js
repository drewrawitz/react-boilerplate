const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pathsHelper = require('./lib/paths-helper');

module.exports = function() {
  return webpackMerge(webpackConfigBase(), {
    module: {
      rules: []
    },
    plugins: [
      new ExtractTextPlugin('[name].bundle.css'),
      new CleanWebpackPlugin(['dist'], { root: pathsHelper('base') })
    ]
  })
};
