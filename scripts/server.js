const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.dev.config');

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
    quiet: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
}));

app.use(hotMiddleware(compiler));

app.get('/css/*.css', (req, res) => {
    res.sendFile(path.join(process.cwd(), `static/css/${req.params[0]}.css`));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'static/index.html'));
});

app.listen(3000, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:3000/');
});
