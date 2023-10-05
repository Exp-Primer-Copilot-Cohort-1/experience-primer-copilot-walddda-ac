// create web server

var express = require('express');
var path = require('path');
var app = express();

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// serve index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// start server
app.listen(8080);
console.log('Server started: http://localhost:8080/');