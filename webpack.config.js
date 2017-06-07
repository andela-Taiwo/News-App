'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test'];

// Set the correct environment
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname+ '/public',
    filename:'bundle.js',
    publicPath: '/public/'
  },
	devServer: {
		inline:true,
    port: 3000
},
  module:{
    loaders: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
				test:/\.sass$/,
				loader:'style-loader!css-loader!sass-loader',
			},
      {
        test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
         query:{presets: ['es2015','react'],
       }
      },
    ]
  },

}
