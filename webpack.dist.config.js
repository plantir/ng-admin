var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// config.devtool = '';
config.module.rules = [{
    test: /\.js$/,
    exclude: [/app\/lib/, /node_modules/],
    use: [{
      loader: 'babel-loader',
    }]
  },
  {
    test: /\.(png|jpg|svg)$/,
    loader: 'url-loader?limit=8192&publicPath=../&name=img/[name].[ext]'
  }, {
    test: /\.(woff|woff2|eot|ttf)$/,
    loader: 'url-loader?limit=8192&publicPath=../&name=css/fonts/[name].[ext]'
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
    use: ExtractTextPlugin.extract({
      use: [{
          loader: "css-loader",
          options: {
            minimize: true
          }
        }, {
          loader: "sass-loader",
          options: {
          }
        },
        {
          loader: 'autoprefixer-loader'
        },

        // {
        // loader:'font?format[]=truetype&format[]=woff&format[]=embedded-opentype'
        // }
      ],
      // use style-loader in development
      fallback: "style-loader"
    })
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: 'css-loader'
    })
  }
]
config.output = {
  filename: 'js/[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'dist/')
};

config.plugins = config.plugins.concat([
  new ExtractTextPlugin('css/[name].bundle.css'),

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular', 'mCustomScrollbar', 'chosen']
    }
  })
]);

module.exports = config;