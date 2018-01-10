var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello Heroku World!');
});

var port = process.env.PORT || 3000
app.listen(port)
