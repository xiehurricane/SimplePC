var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ManifestPlugin = require('webpack-manifest-plugin');
// var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var HtmlResWebpackPlugin = require('html-res-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var CopyWebpackPlugin = require('copy-webpack-plugin-hash');
var path = require('path');
// var rucksack = require('rucksack-css');
var autoprefixer = require('autoprefixer');

// var lazyComponentRegex = /controllers\/MineComponent\/([^\/]+\/?[^\/]+)\/(\1).jsx$/

// var config = {
//        hash: "-[hash:6]",
//        chunkhash: "-[chunkhash:6]",
//        contenthash: "-[contenthash:6]"
//    };

module.exports = {
        //devtool: 'source-map',//'cheap-module-eval-source-map',
        name: "browser",
        devtool: 'inline-source-map',
        debug: true,
        entry: {
            main: path.resolve(__dirname, '../client/main.js'),
            common: [
              'react',
              'react-dom'
            ]
        },
        output: {
          path: path.resolve(__dirname, '../dist'),
          publicPath: './resources/',
          filename: '[name].js',
          chunkFilename: '[name].chunk.js',
        },
        module: {
          postLoaders:[
              { test: /\.(js|jsx)$/, loader: 'es3ify-loader'}
          ],
          loaders:[
            {
              test: /\.(wav|mp3)?$/,
              loader: 'url',
            },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel'},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!postcss-loader") },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)([\?]?.*)$/, loader: 'url-loader?limit=31000&name=[name].[ext]' },
            {
              test: /\.json$/,
              loader: 'json-loader',
            }
          ],
        },

        postcss: [
          // rucksack(),
          autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
          }),
        ],

        plugins: [
          // new webpack.LoaderOptionsPlugin({
          //   debug: true,
          //   // minimize : ENV === 'dev',
          //   options: {
          //     postcss: [
          //       // rucksack(),
          //       autoprefixer({
          //         browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
          //       }),
          //     ]
          //   }
          // }),
          new webpack.DefinePlugin({
              "process.env": {
                  NODE_ENV: JSON.stringify("dev")
              }
          }),
          // new WebpackMd5Hash(),
          // new webpack.optimize.DedupePlugin(),
          new ExtractTextPlugin("main.css"),
          new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            children: true,
            minChunks: Infinity,
            filename: 'common.js',
          }),
          // new CopyWebpackPlugin([
          //     {
          //         from: '../src/assets/imgs/logo.png',
          //         to: '../logo.png'
          //     }
          // ]),
          new HtmlResWebpackPlugin({
              filename: "index.html",
              template: "./index-template.html",
              htmlMinify : false,
              favicon : './client/assets/imgs/logo.png',
              chunks:{
                'common':{
                  attr: {                     // attributes for index chunk
                      js: "async=\"false\"",
                      css: "offline",
                  },
                },
                'main': {
                    attr: {                     // attributes for index chunk
                        js: "async=\"false\"",
                        css: "offline",
                    },
                    inline: {                   // inline or not for index chunk
                        js: false,
                        css: false
                    }
                },
              },
          }),

          new ManifestPlugin({
            basePath: path.resolve(__dirname, '../dist/'),
          }),
          // new webpack.optimize.UglifyJsPlugin({
          //   output: {
          //     comments: false,  // remove all comments
          //   },
          //   compress: {
          //       warnings: false
          //   }
          // })
        ],
        externals: {
            "jquery": "jQuery"
        }
    };
