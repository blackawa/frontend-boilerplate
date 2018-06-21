const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
});