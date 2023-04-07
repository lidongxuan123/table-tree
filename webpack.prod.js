/*
 * @Author: 李东轩 Dongxuan.Li@lotuscars.com.cn
 * @Date: 2023-04-03 10:13:51
 * @LastEditors: 李东轩
 * @LastEditTime: 2023-04-06 18:44:28
 * @Description: file content
 */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const stylesHandler = MiniCssExtractPlugin.loader;

console.log("prod")

const config = {
    entry: {
        main: './src/component/main.tsx'
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'file'),
        clean:true,
        library: {
            name: "table-tree",
            type: "umd"
          },
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        // new CopyWebpackPlugin({
        //     patterns:[{
        //         from:'src/component',
        //         to:'component'
        //     }]
        // } )
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    mode: "production"
};

module.exports = () => {
    return config;
};
