const router = require('express').Router()
const db = require('../db.js')
const util = require('../util/authUtil');

// post survey responses
router.post('/surveys', util.checkToken, function (req, res) {
	console.log("prefs", req.body.prefs)
	console.log("iddddd", req.user.id)
  // use insert to add item into DB
	db('users')
	.where({id: req.user.id})
	.update ({
		prefs: req.body.prefs
	})
  .then(function(prefs){
res.sendStatus(201);
  });
})



// /*getAllRankings
router.get('/rankings/', function(req,res) {
  db.select().table('users')
  .then(function(results){
    res.send(results)
  })
})


router.get('/surveys',  util.checkToken,  function(req,res) {
  console.log('user id is', req.user.id);
 db('users').where({
	 id: req.user.id
 }).select('prefs')
	.then(function(results){
    console.log('results are', results);
    var resultPrefs = results[0].prefs || '{}'
    console.log('parsing', resultPrefs);
		// console.log(JSON.parse(results[0].prefs))
		res.send(JSON.parse(resultPrefs));
	})
})


// router.post('/rankings', function (req, res) {
// 	console.log(req.body)
// 	console.log(typeof req.body.prefs)
//   // use insert to add item into DB
//   db.insert({
// 		id: req.body.id
//     prefs:req.body.prefs
// 	})
//   .into('users')
//   .then(function(){
//     res.send('working');
//   });
// })




module.exports = router
