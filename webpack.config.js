let path = require("path")
// let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  // module: {
  //   rules: [

  //   ]
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({ title: "Обработка изображений", template: "./src/index.html" })
  // ]
}