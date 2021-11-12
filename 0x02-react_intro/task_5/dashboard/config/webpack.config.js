const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        compress: true,
        static: {
            directory: path.join(__dirname, './dist')
        }
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
            "file-loader",
            {
                loader: "image-webpack-loader",
                options: {
                bypassOnDebug: true, 
                disable: true, 
                },
            },
            ],
        },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: './src/template.html',
            favicon: "./dist/favicon.ico"
        })
    ],
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};