const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
    ],
  },
  serve: {
    add: (app, middleware, options) => {
      app.use(convert(history()));
    },
    hot: true,
    open: true,
  },
});