process.env.NODE_ENV = 'development';

/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

// const resolve = dir => path.join(__dirname, dir);

const config = {
  devtool: 'inline-source-map',
  entry: ['react-hot-loader/patch', './src/index.js'],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  cache: true,
  devServer: {
    hot: true,
    compress: true,
    open: true,
    inline: true,
    overlay: true,
    stats: 'errors-only',
    port: 8080,
  },
};

module.exports = merge(baseWebpackConfig, config);
