const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=http://localhost:4000/__webpack_hmr',
        './application/entry/index.js'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        publicPath: 'http://localhost:4000/js/',
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
                include: path.resolve('./')
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                include: path.resolve('./')
            }
        ]
    }
};
