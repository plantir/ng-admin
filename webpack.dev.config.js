var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'client')
};

config.module.rules = [{
    test: /\.js$/,
    exclude: [/app\/lib/, /node_modules/],
    use: [{
      loader: 'babel-loader',
    }]
  },
  {
    test: /\.(png|jpg|svg)$/,
    loader: 'url-loader?limit=8192'
  }, {
    test: /\.(woff|woff2|eot|ttf)$/,
    loader: 'url-loader?limit=8192'
  },
  {
    test: /jquery-mousewheel/,
    loader: "imports-loader?define=>false&this=>window"
  },
  {
    test: /malihu-custom-scrollbar-plugin/,
    loader: "imports-loader?define=>false&this=>window"
  },
  // { test: /\.woff2?$/, loader: "url?limit=10000&minetype=application/font-woff" },
  {
    test: /\.html$/,
    loader: 'raw-loader'
  },
  {
    test: /\.scss$/,
    use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader", // translates CSS into CommonJS
        options: {
          sourceMap: true,
        }
      }, {
        loader: 'autoprefixer-loader'
      },
      {
        loader: "sass-loader", // compiles Sass to CSS
        options: {
          sourceMap: true
        }
      }
    ]
  }

]

config.plugins = config.plugins.concat([
  // new ExtractTextPlugin("styles.css"),
  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.

  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;