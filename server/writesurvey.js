var express = require('express');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var db = require(./db.js);

var app = express();

app.use(bodyParser.json());

module.exports = {
  writeSurvey :{
    app.post('/results', function(req, res){
      var answer = {id: req.body.id, user: req.body.user, answer: req.body.answer}
      db.query('INSERT INTO survey_response', answer, function(err, results){
        if (err) throw err;
      })

    })
  }
}
