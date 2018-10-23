/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const resolve = dir => path.join(__dirname, dir);

const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: eslintFriendlyFormatter,
        },
      },
      {
        test: /\.jsx?$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
    unsafeCache: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [resolve('src'), resolve('node_modules')],
    alias: {
      src: resolve('src'),
    },
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    pathinfo: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendor',
          reuseExistingChunk: false,
          priority: -10,
        },
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors',
          priority: -20,
        },
      },
    },
    runtimeChunk: { name: 'runtime' },
    noEmitOnErrors: true,
    mergeDuplicateChunks: true,
    removeEmptyChunks: true,
    removeAvailableModules: true,
    namedModules: true,
    namedChunks: true,
    providedExports: true,
  },
};

if (process.env.npm_config_report) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
