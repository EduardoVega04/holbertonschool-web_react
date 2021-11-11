const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true, // to can use @reach/router without errors
        hot: true,
        compress: true,
        static: path.resolve('./dist'),
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
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
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
                },
            },
            ],
        },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: path.resolve('./dist/index.html'),
        filename: 'index.html'
        })
    ]
};