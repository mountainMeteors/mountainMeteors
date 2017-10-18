const router = require('express').Router()
const db = require('../db.js')
const util = require('../util/authUtil');



router.post('/uploads', (req,res) => {
  const photoList = [];
  var photoListString;

	for (var i = 0; i < req.files.length; i++) {
		var photoName = req.files[i].destination + req.files[i].filename
    photoList.push(photoName);
    photoListString= JSON.stringify(photoList);
  }

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
  const listingPhotos = {
    listingId: req.params.id,
    photoPaths: []
  }
  db('listingPhotos').where({
 	 listing_id: req.params.id
  }).select('name')
	.then(function(results){
		results.forEach(function(item) {
      listingPhotos.photoPaths.push({
        original: item.name,
        thumbnail: item.name
      })
		})

		res.send(listingPhotos);
	})
})



module.exports = router;
