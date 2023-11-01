// Create a web server
// Run with: node comments.js

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Tell the web server to serve files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var comments = [];

app.get('/comments.json', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = req.body;
  console.log(comment);
  comments.push(comment);
  res.json(comment);
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});