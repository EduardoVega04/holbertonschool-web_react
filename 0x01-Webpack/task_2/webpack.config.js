const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, './public'),
        compress: true,
        port: 8564,
    },
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "public")
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"]
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    performance: {
        maxAssetSize: 1000000
    },
    optimization: {
        runtimeChunk: 'all'
    }
};
