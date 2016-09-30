const express = require('express')
const router = express.Router()
const db = require('../db.js')
const bcrypt = require('bcrypt-nodejs');
const util = require('../util/authUtil');


// const authUtil = require('../util/authUtil')

router.use((req, res, next) => {
  console.log('Request at /api received');
  // console.log('next is', next);
  next();
});

router.post('/signup', (req, res) => {
  console.log('server-side signup with', req.body);
  var email = req.body.email;
  var password = req.body.password;

  // var salt = bcrypt.genSaltSync(10);
  bcrypt.hash(password, null, null, function(err, hash) {
    console.log('hashing', hash);
    return db('users')
      .insert({ email: email, password: hash})
      .then(function() {
        res.send('account created');
      })
      .catch(function() {
        res.send('username exists');
      });
  });
});

router.post('/login', util.checkToken, (req, res) => {
  console.log('server-side login with', req.body);
  console.log('headers', req.headers);
  var email = req.body.email;
  var password = req.body.password;

  return db('users')
    .where({
      email: email
    })
    .then(function(dbRes) {
      let user = dbRes[0];
      console.log('user is', user);
      if (user) {
        bcrypt.compare(password, user.password, function(err, match) {
          if (err) console.log('err', err);
          // if (match) res.send('user found, pw matches');
          if (match) util.createToken(req, res, user.id);
          else res.send('user found, no pw match');
        })
      } else {
        res.send('user not found');
      }
    })
    .catch(function(err) {
      res.send('error in finding user' + err);
    });
});

module.exports = router;
