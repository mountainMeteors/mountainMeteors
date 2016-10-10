const router = require('express').Router();
const util = require('../util/disCtrl');
const util2 = require('../util/authUtil');
const db = require('../db.js')

router.post('/dist', util.findDistance, function(req,res){

  res.send('got here')
})

var homeAddress, targetAddress
router.get('/dist/:id', function(req,res) {
  console.log('###req.params.id###', req.params.id)
  db('listings').innerJoin('users')
  .where({
    id: req.params.id,
    user_id: users.id
  })
  .select('location', 'prefs')
  .then(function(results){
    homeAddress = results
      res.send({'homeAddress': homeAddress })
    })
  })
// router.get('/dist/:id', function(req,res) {
//   console.log('###req.params.id###', req.params.id)
//   db('listings').where({
//     id: req.params.id
//   }).select('location')
//   .then(function(results){
//     homeAddress = results
//       res.send({'homeAddress': homeAddress })
//     })
//   })

module.exports = router;
