const path = require('path');

module.exports = {

  entry: [
    './event/src/index.js'
  ],

  output: {
  	filename: 'background.js',
  	path: path.join(__dirname, '../', 'build')
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};