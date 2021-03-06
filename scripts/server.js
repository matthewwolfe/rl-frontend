const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.dev.config');

const app = express();
const compiler = webpack(config);

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.use(devMiddleware(compiler, {
    quiet: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
}));

app.use(hotMiddleware(compiler));

app.get('/css/*.css', (req, res) => {
    res.sendFile(path.join(process.cwd(), `static/css/${req.params[0]}.css`));
});

app.get('/item_images/*.png', (req, res) => {
    res.sendFile(path.join(process.cwd(), `item_images/${req.params[0]}.png`));
});

app.listen(4000, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:4000/');
});
