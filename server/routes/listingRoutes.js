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

router.post('/listings/', util.checkToken, (req, res) => {
  console.log('listing req received at :id', req.body.userId);
  console.log('REQUEST BODY', req.body)
  return db('listings')
  .where({
    user_id: req.body.userId
  })
  .insert({user_id: req.body.userId, location: req.body.location, rent: req.body.price, pets: req.body.pets})
  .then(function(listings) {
     res.send(listings);
  });
});

router.put('/listings/', (req, res) => {
  console.log('server put request', req.headers['listing-id'], req.body);
  return db('listings')
  .where({
    id: req.headers['listing-id']
  })
  .update(req.body) //REPRESENTS OBJECT CONTAINING ANY EDITS
  .then(function(listings) {
     console.log('listings', listings);
     res.send({updated: listings});
  });
});


module.exports = router;
