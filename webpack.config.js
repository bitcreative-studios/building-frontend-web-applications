const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const isDevMode = process.env.NODE_ENV !== 'production'
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isDevMode ? 'development' : 'production',
  entry: '.',
  module: {
    rules: [
      { test: /.js$/, loader: 'babel-loader' },
      {
        test: /.(sc|sa|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: '../public/index.html',
    }),
  ],
}
