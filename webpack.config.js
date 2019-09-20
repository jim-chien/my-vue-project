const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer-stylus');

module.exports = {
  entry: './src/main.js',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'stylus-loader',
            options: {
              use: [
                autoprefixer(),
              ],
            }
          }
        ]
      },
      {
        test: /\.(png|svg)$/, use: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
