const router = require('express').Router()
const db = require('../db.js')
const util = require('../util/authUtil');



router.post('/uploads', (req,res) => {
	console.log('hereeeeee')
	console.log(req.files, 'bodyyyy*******', req.body)
  const photoList = [];
  var photoListString;
	// if (req.files.length){
		for (var i=0; i< req.files.length; i++) {
			var photoName = req.files[i].destination + req.files[i].filename
      photoList.push(photoName);
      photoListString= JSON.stringify(photoList);
    }
console.log('*******',photoName,photoListString)
    	db('listingPhotos')
    	.insert ({
    		name : photoName,
    		listing_id: req.body.listingId
    	}).
    	then(function(results){
        res.send('successs');
    	})
})


router.get('/uploads/:id', (req,res) => {
	console.log('hereeeeee')
  const photoPaths = [];
 db('listingPhotos').where({
	 listing_id: req.params.id
 }).select('name')
	.then(function(results){
		console.log(results.length, typeof photoPaths)
		results.forEach(function(item) {
        photoPaths.push(item.name)
		})

		res.send(photoPaths);
	})
})



module.exports = router;
