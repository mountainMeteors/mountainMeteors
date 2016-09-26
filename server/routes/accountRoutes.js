const express = require('express')
const router = express.Router()
const db = require('../db.js')


// const authUtil = require('../util/authUtil')

router.use((req, res, next) => {
  console.log('Request at /accounts received');
  next();
});

router.post('/signup', (req, res) => {
  return db('users')
  .insert({ email: req.body.email, password: req.body.password})
  .then(function() {
     res.send('account created');
  });
});

module.exports = router;
