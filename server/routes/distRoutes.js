const router = require('express').Router();
const util = require('../util/disCtrl');
const db = require('../db.js')

router.post('/dist', util.findDistance, function(req,res){
  
  res.send('got here')
})

router.get('/dist', function(req,res) {
  db.select().table('users')
  .then(function(results){
    res.send(results)
  })
})
module.exports = router;
