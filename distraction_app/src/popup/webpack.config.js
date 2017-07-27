const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/popup/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {

  entry: [
    './src/popup/src/components/app/App.js'
  ],

  output: {
    filename: 'popup.js',
    path: path.join(__dirname, '../../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src')
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig]
}

