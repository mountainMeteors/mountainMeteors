const router = require('express').Router()
const db = require('../db.js')

//middleware specific to this router
// router.use((req, res, next) => {
//   console.log('')
// })

router.get('/listings', (req, res) => {
  console.log('listing req received');
  return db('listings')
  // return select().from('listings')
  .then(function(listings) {
     res.send(listings);
  });
});


module.exports = router;
