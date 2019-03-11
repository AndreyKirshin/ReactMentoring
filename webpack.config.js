var webpack = require('webpack');

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
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
                        presets: ['react']
                      }
                    }
                ],
            },
            {
                test: /\.jsx$/,
                // loader: "react-hot-loader!babel-loader",
                exclude: [/node_modules/, /public/],
                use: [
                    {
                      loader: 'babel-loader',
                      options: {
                        presets: ['react']
                      }
                    }
                ],
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}