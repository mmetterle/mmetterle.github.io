var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/main/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
	new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 3000,
    hot: true
  },
 
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "stage-0", "react"],
        "plugins": ["react-hot-loader/babel"]
      },
      include: path.join(__dirname, 'src')
	},
    { test: /\.css$/, loader: "style!css" },
    { test: /\.less$/, loader: 'style!css!less' },
    { test: /\.scss$/, loader: 'style!css!sass' },]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  postcss: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
};