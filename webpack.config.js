var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      //   loader: 'file-loader?name=assets/[name].[hash].[ext]'
      // },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap'})
      // },
      // {
      //   test: /\.css$/,
      //   loader: 'raw-loader'
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular 2 ES6 Weather',
      templateContent: '<ng2-es6-weather></ng2-es6-weather>'
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
};
