var path = require('path'); //allows config file location to be dynamic

module.exports = {
  entry: './frontend/verve.jsx',  //this is where webpack starts looking
  output: { //where webpakc puts the output files. use the path and filename
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader', //transpiles ES6 to ES5.
          options: {
            presets: ['@babel/env', '@babel/react'] //which presets to run
          }
        },
      }
    ]
  },
  devtool: 'source-map', //helps with printing the actual line numbers
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};