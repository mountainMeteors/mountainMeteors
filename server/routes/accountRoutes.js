const express = require('express')
const router = express.Router()
const db = require('../db.js')
const bcrypt = require('bcrypt-nodejs');


// const authUtil = require('../util/authUtil')

// router.use((req, res, next) => {
//   console.log('Request at /accounts received');
//   next();
// });

router.post('/signup', (req, res) => {
  console.log('server-side signup with', req.body);
  let email = req.body.email;
  let password = req.body.password;

  let salt = bcrypt.genSaltSync(10);
  bcrypt.hash(password, salt, null, function(err, hash) {
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

router.post('/login', (req, res) => {
  console.log('server-side login with', req.body);
  let email = req.body.email;
  let password = req.body.password;

  return db('users')
    .where({
      email: email
    })
    .then(function(dbRes) {
      console.log('DB user search results', dbRes);
      let user = dbRes[0];
      if (user !== undefined) {
        console.log('comparing', password, user.password);
        bcrypt.compare(password, user.password, function(err, match) {
          if (match) res.send('user found, pw matches');
          else res.send('user found, no pw match');
        })
      } else {
        res.send('user not found');
      }
    })
    .catch(function(err) {
      console.log('error in finding user', err);
    });

  // let salt = bcrypt.genSaltSync(10);
  // bcrypt.hash(password, salt, null, function(err, hash) {
  //   console.log('hashing', hash);
  //   return db('users')
  //     .insert({ email: email, password: hash})
  //     .then(function() {
  //        res.send('account created');
  //     })
  //     .catch(function() {
  //       res.send('username exists');
  //     });
  // });
});

module.exports = router;
