const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pathsHelper = require('./lib/paths-helper');

module.exports = function () {
  return webpackMerge(webpackConfigBase(), {
    output: {
      publicPath: '/'
    },
    module: {
      rules: []
    },
    devServer: {
      historyApiFallback: true,
      contentBase: pathsHelper('src'),
      port: 8080,
      watchOptions: {
        poll: 1000
      },
      stats: {
        children: false
      }
    },
    plugins: [
      new ExtractTextPlugin('[name].bundle.css')
    ]
  })
};
