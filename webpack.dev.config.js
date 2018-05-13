const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './application/core/index.js'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new Dotenv(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    resolve: {
        modules: [
            path.resolve('./application'),
            path.resolve('./'),
            path.resolve('./node_modules')
        ]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'application')
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                include: path.resolve('./')
            }
        ]
    }
};
