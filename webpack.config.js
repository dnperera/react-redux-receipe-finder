const webpack = require("webpack");
require("dotenv").config(); //load all environment varialbes from .env
const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HTMLWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.DefinePlugin({
      RECIPE_API: JSON.stringify(process.env.RECIPE_API)
    })
  ]
};
