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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
