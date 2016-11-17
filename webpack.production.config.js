const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['stage-2', 'es2015', 'react']
      }
    },{
      test: /\.json$/,
      loader: "json"
    },{
      test: /\.css$/,
      loader: 'style!css?modules!postcss'
    }]
  },
  postcss: function () {
      return [require('autoprefixer'), require('precss')];
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'index.html',
        to: 'index.html'
      }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
