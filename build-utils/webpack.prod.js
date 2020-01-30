// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//     mode: 'production',
//     entry: './src/index.js',
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: ['babel-loader', 'eslint-loader']
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['*', '.js', '.jsx']
//     },
//     output: {
//         path: __dirname + '/dist',
//         publicPath: '/',
//         filename: 'bundle.js'
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//         new HtmlWebpackPlugin({
//             title: 'Hello Webpack bundled JavaScript Project',
//             template: './public/index.html'
//         })
//     ],
//     devServer: {
//         contentBase: './dist',
//         hot: true
//     }
// };
const Dotenv = require('dotenv-webpack');
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new Dotenv({
            path: './.env.production',
          }),
    ],
};