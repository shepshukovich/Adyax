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
    contentBase: 'public',
    hot: true
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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
