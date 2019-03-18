var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/',
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 8090
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /public/],
                use: [
                    {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-react']
                      }
                    }
                ],
            },
            {
                test: /\.jsx$/,
                exclude: [/node_modules/, /public/],
                use: [
                    {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-react']
                      }
                    }
                ],
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
          template: "./index.html"
        })
      ]
}