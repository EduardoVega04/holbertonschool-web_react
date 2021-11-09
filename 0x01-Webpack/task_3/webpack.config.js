const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        header: {
            import: './modules/header/header.js',
            dependOn: 'shared'
        },
        body: {
            import: './modules/body/body.js',
            dependOn: 'shared'
        },
        footer: {
            import: './modules/footer/footer.js',
            dependOn: 'shared'
        },
        shared: 'lodash',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
    devServer: {
        static: path.join(__dirname, './public'),
        compress: true,
        port: 8564,
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"]
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: ["file-loader", "image-webpack-loader"]
            }
        ]
    },
    performance: {
        maxAssetSize: 1000000
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        }
    }
};
