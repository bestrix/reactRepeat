const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        overlay:true
        
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude:"/node_modules/"
        },
        {
          test: /\.sass$/,
          use: ["style-loader","css-loader",'sass-loader'],
          exclude:"/node_modules/"
        },
        {
          test: /\.css$/,
          use: ["style-loader","css-loader",],
          exclude:"/node_modules/"
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./src/index.html"
    })],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle2.js',
        publicPath: '/',
    }
  };
