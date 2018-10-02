const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './client/components/App.js',
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    port: 8000,
    contentBase: 'public'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(html)$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      }
    ]
  },
  plugins: [

  ]
}
