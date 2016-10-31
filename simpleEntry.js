require('babel-register')({
  "plugins": [
    [
      "babel-plugin-webpack-loaders",
      {
        "config": "./build-conf/webpack.config.babel.js",
        "verbose": true
      }
    ]
  ]
});
require('./server.js');
