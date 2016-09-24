const express = require('express')
const router = express.Router()
// const authUtil = require('../util/authUtil')

router.use((req, res, next) => {
  console.log('Request at /login received');
  next();
});

router.post('/login', (req, res) => {
  console.log("got to post")
  res.send("got here to post")
})

module.exports = router;
