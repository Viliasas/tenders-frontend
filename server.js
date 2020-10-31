const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');

const app = express();
const staticRoot = __dirname + '/public/';
const env = process.env.NODE_ENV || 'development';

app.set('port', (process.env.PORT || 5000));

app.use(compression());

app.use(function (req, res, next) {
    //if the request is not html then move along
    let accept = req.accepts('html', 'json', 'xml');

    if (accept !== 'html') {
        return next();
    }

    // if the request has a '.' assume that it's for a file, move along
    let ext = path.extname(req.path);

    if (ext !== '') {
        return next();
    }

    fs.createReadStream(staticRoot + 'index.html').pipe(res);
});

app.use(express.static(staticRoot));

app.listen(app.get('port'), function () {
    console.log('app running on port', app.get('port'));
});
