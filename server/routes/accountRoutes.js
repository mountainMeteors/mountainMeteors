const express = require('express')
const router = express.Router()
const db = require('../db.js')
const bcrypt = require('bcrypt-nodejs');
const util = require('../util/authUtil');


// const authUtil = require('../util/authUtil')

router.use((req, res, next) => {
  next();
});

router.post('/signup', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  // var salt = bcrypt.genSaltSync(10);
  bcrypt.hash(password, null, null, function(err, hash) {
    return db('users')
      .insert({ email: email, password: hash})
      .then(function(dbRes) {
        // res.send(dbRes);
        var userId = dbRes[0];
        util.createToken(req, res, userId);
      })
      .catch(function() {
        res.send('username exists');
      });
  });
});

router.post('/login', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  return db('users')
    .where({
      email: email
    })
    .then(function(dbRes) {
      var user = dbRes[0];
      if (user) {
        bcrypt.compare(password, user.password, function(err, match) {
          if (err) console.error('err', err);
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

// router.get('/prefs', util.checkToken, (req, res) => {
//   console.log('server heard prefs', req.user.id);
//   return db('users')
//     .where({
//       id: req.user.id
//     })
//     .then(function(dbRes) {
//       var user = dbRes[0];
//       console.log('user is', user);
//       if (user) {
//         bcrypt.compare(password, user.password, function(err, match) {
//           if (err) console.log('err', err);
//           // if (match) res.send('user found, pw matches');
//           if (match) util.createToken(req, res, user.id);
//           else res.send('user found, no pw match');
//         })
//       } else {
//         res.send('user not found');
//       }
//     })
//     .catch(function(err) {
//       res.send('error in getting prefs' + err);
//     });
// });

module.exports = router;
