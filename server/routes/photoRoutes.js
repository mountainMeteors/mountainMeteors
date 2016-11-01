const router = require('express').Router()
const db = require('../db.js')
const util = require('../util/authUtil');



router.post('/uploads', (req,res) => {
	console.log('hereeeeee')
	console.log(req.files, 'bodyyyy*******', req.body)
  const photoList = [];
  var photoListString;

	for (var i = 0; i < req.files.length; i++) {
		var photoName = req.files[i].destination + req.files[i].filename
    photoList.push(photoName);
    photoListString= JSON.stringify(photoList);
  }

  console.log('*******',photoName,photoListString)

	db('listingPhotos')
	.insert ({
		name : photoName,
		listing_id: req.body.listingId
	})
	.then(function(results){
    res.send('successs ' + results);
	})
})


router.get('/uploads/:id', (req,res) => {
	console.log('getting photos for listing', req.params.id)
  const listingPhotos = {
    listingId: req.params.id,
    photoPaths: []
  }
  db('listingPhotos').where({
 	 listing_id: req.params.id
  }).select('name')
	.then(function(results){
		results.forEach(function(item) {
      listingPhotos.photoPaths.push(item.name)
		})

    console.log(req.params.id, 'sending', results.length, 'photos, ex.', results[0]);
		res.send(listingPhotos);
	})
})



module.exports = router;
