const router = require('express').Router()
const db = require('../db.js')
const util = require('../util/authUtil');

// eq.files[0].destination - to be stored in SQL
router.post('/upload', util.checkToken, (req,res) =>{
	console.log(req.files)
 //  if (req.files.length){
 //    for (var i=0; i< req.files.length; i++) {
 //    	const photoName = req.files[i].destination + req.files[i].fieldname;
 //    	// const timestamp = 
 //    }
	// db('listingPhotos')
	// .where ({id: req.listing.id})
	// .insert ({
 //    name : photoName
 //        : 
	// })





 //  else {
 //  	res.send('no photos in request')
 //  }

 // } 

}

router.post("/upload", function(req, res, next){
	if (req.files) {
		console.log(util.inspect(req.files));
		if (req.files.myFile.size === 0) {
		            return next(new Error("Hey, first would you select a file?"));
		}
		fs.exists(req.files.myFile.path, function(exists) {
			if(exists) {
				res.end("Got your file!");
			} else {
				res.end("Well, there is no magic for those who don’t believe in it!");
			}
		});
	}
});

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
