var connection = require('./db.js')
var express = require('express');
var app = express();

var userSurvey = {
  app.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });
  app.get('/userSurvey/:Id', function(req, res) {

    connection.query('SELECT * from user_Responce', function(err, rows, fields) {
      if (!err)
      res.send(req.params);
       console.log('The solution is: ', rows);
      else
      console.log('Error while performing Query.');
    });
  }
}

module.exports = userSurvey;
