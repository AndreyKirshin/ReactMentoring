var webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env, options)  {
  const isProduction = options.mode === "production";

  const config = {
    context: path.join(__dirname, "src"),
    entry: "./client/main.js",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    output: {
      path: __dirname + '/public/',
      filename: "bundle.js"
    },
    devServer: {
      inline: true,
      hot: true,
      port: 8091,
      contentBase: "./public"
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/, /public/],
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: "json-loader"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "App Movie",
        hash: true,
        template: path.resolve(__dirname, "./index.html")
      })
    ]
  }
  return config;
}