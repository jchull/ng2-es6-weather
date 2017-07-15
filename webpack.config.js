let path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    DotenvPlugin = require('webpack-dotenv-plugin'),
    FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js'
  },
  devtool: 'cheap-module-source-map',
  profile: false,
  stats: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
          {loader: "angular2-template-loader"}
        ]
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader',
        exclude: /\.async\.(html|css)$/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new DotenvPlugin({
      sample: './.env',
      path: './.env.local'
    }),
    new FaviconsWebpackPlugin('./src/favicon-194x194.png'),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context &&
            (module.context.indexOf('node_modules') !== -1);
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
};
