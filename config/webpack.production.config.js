const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolve = relativePath => path.resolve(__dirname, '..', relativePath);


module.exports = {
  mode: 'production',
  entry: {
    vue: 'vue',
    index: resolve('src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
      },
    ],
  },
  devtool: 'eval',
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    compress: true,
    open: false,
    watchOptions: {
      ignored: /node_modules/,
      poll: true,
    },
    publicPath: '/dist/',
    contentBase: resolve('src/assets'),
    watchContentBase: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.vue', '.js', '.json'],
  },
  performance: {
    hints: false,
  },
};