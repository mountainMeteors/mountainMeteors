const router = require('express').Router()
const db = require('../db.js')
const util = require('../util/authUtil');

router.get('/listings', util.checkToken, (req, res) => {
  console.log('listing req received', req.body);
  console.log('token', req.headers['x-access-token']);
  console.log('user info', req.user);
  return db('listings')
  .where({
    user_id: req.user.id
  })
  .then(function(listings) {
     res.send(listings);
  });
});

router.post('/listings/', (req, res) => {
  console.log('listing req received at :id', req.params.id);
  return db('listings')
  // return select().from('listings')
  .where({
    user_id: req.params.id
  })
  .then(function(listings) {
     res.send(listings);
  });
});


module.exports = router;
