const router = require('express').Router();
const db = require('../db.js');
const util = require('../util/authUtil');
const Xray = require('x-ray');
const Promise = require('bluebird');

var xray = Xray({
  filters: {
    trim: function(value) {
      return typeof value === 'string' ? value.trim() : value
    },
    reverse: function(value){
      return typeof value === 'string' ? value.split('').reverse().join('') : value
    },
    slice: function(value, start, end){
      return typeof value === 'string' ? value.slice(start, end) : value
    }
  }
});

router.get('/listings', util.checkToken, (req, res) => {
  console.log('listing req received', req.body);
  console.log('token', req.headers['x-access-token']);
  console.log('user info', req.user);
  return db('listings')
  .where({
    user_id: req.user.id
  })
  .then(function(listings) {
    res.send(listings);
  });
});

router.post('/listings/', util.checkToken, (req, res) => {
  console.log('listing req received at :id', req.body.userId);
  console.log('REQUEST BODY', req.body)
  return db('listings')
  .where({
    user_id: req.user.id
  })
  .insert({
    user_id: req.user.id,
    location: req.body.location,
    rent: req.body.rent,
    pets: req.body.pets,
    lat: req.body.lat,
    lng: req.body.lng
  })
  .then(function(listings) {
     res.send(listings);
  });
});

// router.get('/scrape/:scrapeUrl/:locationName/:locationCode', function(req, res){
//   console.log('REQUEST PARAMS', req.params);
//   var targetUrl = 'http://' + req.params.scrapeUrl + '/' + req.params.locationName + '/' + req.params.locationCode || 'http://www.streeteasy.com';
//   console.log('targetUrl', targetUrl);
//   var getApartmentInfo = Promise.promisify(xray(targetUrl, {
//     bedInfo: xray('.beds', [{
//       numberOfBedsLong: '.longText | trim',
//       numberOfBedsMedium: '.mediumText | trim',
//       numberOfBedsShort: '.shortText | trim'
//     }]),
//     bathInfo: xray('.baths', [{
//       numberOfBathsLong: '.longText | trim',
//       numberOfBathsMedium: '.medium | trim',
//       numberOfBathsShort: '.shortText | trim'
//     }]),
//     rentInfo: ['.rent | trim'],
//     unitInfo: ['.unit | trim'],
//     squareFeet: ['.sqft | trim'],
//     availability: ['.available | trim'],
//     amenities: xray('.descriptionSection', [{
//       body: 'p | trim'
//     }]),
//     petsAllowed: xray('.petPolicy', [{
//       petPolicyDetails: ['.petPolicyDetails | trim']
//     }])
//   })
//   (function (err, description) {
//    if (err) {
//      console.log('err', err);
//    } else {
//      //TODO catch single dwelling edge case,
//      //TODO catch undefined edge case (i.e. body)
//      if (description.amenities.length === 'undefined' || description.amenities.length > 0) {
//        description.amenities.dishwasher = description.amenities[0].body.includes('dishwasher');
//        description.amenities.laundry = description.amenities[0].body.includes('laundry');
//        description.amenities.nofee = description.amenities[0].body.toLowerCase().includes('no fee') || description.amenities[0].body.toLowerCase().includes('no-fee');
//        description.amenities.gym = description.amenities[0].body.toLowerCase().includes('gym') || description.amenities[0].body.toLowerCase().includes('fitness');
//      }
//      //console.log('description.petsAllowed', description.petsAllowed);
//      //console.log('description.petsAllowed.length', description.petsAllowed.length);
//      if (description.petsAllowed.length === 1 && description.petsAllowed.length > 1) {
//        description.dogsAllowed = description.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('dogs allowed');
//        description.catsAllowed = description.petsAllowed[0].petPolicyDetails[1].toLowerCase().includes('cats allowed');
//      }
//      else if (description.petsAllowed[0] !== 'undefined' && description.petsAllowed.length > 0) {
//        //console.log('description.petsAllowed', description.petsAllowed);
//        if (description.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('allowed')) {
//          description.dogsAllowed = description.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('dogs');
//          description.catsAllowed = description.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('cats');
//        }
//      } else {
//        description.dogsAllowed = false;
//        description.catsAllowed = false;
//      }
//
//      //console.log('\n\n\n\n\n\ndescription\n', description);
//    }
// }));

// getApartmentInfo().then(function (description) {
//   console.log('description', description);
// })

router.put('/listings/', (req, res) => {
  console.log('server put request', req.headers['listing-id'], req.body);
  return db('listings')
  .where({
    id: req.headers['listing-id']
  })
  .update(req.body) //REPRESENTS OBJECT CONTAINING ANY EDITS
  .then(function(listings) {
     console.log('listings', listings);
     res.send({updated: listings});
  });
});


module.exports = router;
