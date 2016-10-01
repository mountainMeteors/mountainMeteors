const router = require('express').Router()
const db = require('../db.js')

//middleware specific to this router
// router.use((req, res, next) => {
//   console.log('')
// })

router.get('/listings', (req, res) => {
  console.log('listing req received', req.body);
  return db('listings')
  // return select().from('listings')
  // .where({
  //   user_id: req
  // })
  .then(function(listings) {
     res.send(listings);
  });
});

router.get('/listings/:id', (req, res) => {

  console.log('listing req received at :id', req.params.id);
  return db('listings')
  .where({
    user_id: req.params.id
  })
  .then(function(listings) {
     res.send(listings);
  });
});

router.post('/listings/', (req, res) => {

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


module.exports = router;
