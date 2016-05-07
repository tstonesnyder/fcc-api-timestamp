'use strict';

// Express.js
var express = require('express');
var DateConverter = require('./app/server/dateConverter.server.js');

var app = express();
// Use the port that Heroku provides or default to 8080
var port = process.env.PORT || 8080;
// Why is this necessary???
var dateConverter = new DateConverter();

app.route('/')
  .get(function (req, res) {
    // res.send('instructions');
    res.sendFile(process.cwd() + '/public/instructions.html');
  });
  
app.route('/:date').get(dateConverter.convertDate);

app.listen(port, function () {
    console.log('Listening on port ' + port + '...');
});

