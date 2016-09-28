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

module.exports = router;
