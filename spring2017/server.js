var express = require('express'),
    docserver = require('docserver');
var app = express();
app.use(docserver({
    dir: __dirname,
    url: '/'
}))
app.listen(3000);