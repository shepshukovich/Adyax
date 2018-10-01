const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/components/App.js',
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
  },
  plugins: [

  ]
}
