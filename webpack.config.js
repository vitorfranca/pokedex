const webpack = require('webpack');

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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
