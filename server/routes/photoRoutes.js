const router = require('express').Router()
const db = require('../db.js')
const util = require('../util/authUtil');



router.post('/uploads', (req,res) => {
	console.log('hereeeeee')
	console.log(req.files)
	console.log('pjjjjjj=====>', photoName)

	// if (req.files.length){
		for (var i=0; i< req.files.length; i++) {
			var photoName = req.files[i].destination + req.files[i].filename
    	// const timestamp = 
    	console.log('fgejfhekw,fh')
    	db('listingPhotos')
    	// .where ({id: req.listing.id})
    	.insert ({
    		name : photoName

    	}).then(function(results){
    		res.send('heyyyy')
    	})
    }
// }

})

module.exports = router;
