var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send(`Add /<username> into your url!`);
});

app.get('/:username', function(req, res) {
    res.send(`Hello ${req.params.username}, It's Heroku!`);
});

var port = process.env.PORT || 3000
app.listen(port)
