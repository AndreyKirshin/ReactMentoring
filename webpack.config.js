var webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(env, options)  {
  const envMode = options ? options.mode : '';
  const isProduction = envMode === "production";

  const config = {
    context: path.join(__dirname, "src"),
    entry: "./client/main.js",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    output: {
      path: __dirname + '/public/',
      filename: "bundle.js",
      publicPath: '/'
    },
    devServer: {
      inline: true,
      hot: true,
      port: 8091,
      contentBase: "./public",
      historyApiFallback: true
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
        // {
        //   test: /\.json$/,
        //   loader: "json-loader"
        // },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "less-loader"]
          })
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "App Movie",
        hash: true,
        template: path.resolve(__dirname, "./index.html")
      }),
      new ExtractTextPlugin({
        filename: "style.css"
      })
    ]
  }
  return config;
}