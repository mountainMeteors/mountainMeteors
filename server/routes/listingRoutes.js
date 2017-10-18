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
  return db('listings')
  .where({
    user_id: req.user.id
  })
  .then(function(listings) {
    listings.map(listing => {

    })
    res.send(listings);
  });
});

router.post('/listings/', util.checkToken, (req, res) => {
  return db('listings')
  .where({
    user_id: req.user.id
  })
  .insert({
    user_id: req.user.id,
    location: req.body.location,
    // rent: req.body.rent.replace(/\$|,/gi, '') //Can use this to remove $ and , for consistency
    rent: req.body.rent,
    pets: req.body.pets,
    lat: req.body.lat,
    lng: req.body.lng,
    url: req.body.url,
    neighborhood: req.body.neighborhood,
    bedrooms: req.body.bedrooms.split(' ')[0],
    bathrooms: req.body.bathrooms.split(' ')[0],
    sq_ft: req.body.squareFeet.split(' ')[0],
    gym: req.body.gym,
    laundry: req.body.laundry,
    doorman: req.body.doorman,
    dishwasher: req.body.dishwasher,
    garage: req.body.garage,
    pool: req.body.pool,
    elevator: req.body.elevator,
    outdoor_space: req.body.outdoorSpace,
    no_fee: req.body.noFee
  })
  .then(function(listings) {
     res.send(listings);
  });
});


router.post('/scrape', function(req, res){
  // console.log('xray().stream: ', xray().stream);
  // console.log('REQUEST BODY', req.body.url);
  // var targetUrl = 'http://' + req.params.scrapeUrl + '/' + req.params.locationName + '/' + req.params.locationCode || 'http://www.streeteasy.com';

  // http://www.apartments.com/3133-31st-st-astoria-ny/5y6jkwq/

  var getApartmentInfo = xray(req.body.url, {
    bedrooms: xray('.beds', [{
      numberOfBedsLong: '.longText | trim',
      numberOfBedsMedium: '.mediumText | trim',
      numberOfBedsShort: '.shortText | trim'
    }]),
    bathrooms: xray('.baths', [{
      numberOfBathsLong: '.longText | trim',
      numberOfBathsMedium: '.medium | trim',
      numberOfBathsShort: '.shortText | trim'
    }]),
    rent: ['.rent | trim'],
    unitInfo: ['.unit | trim'],
    squareFeet: ['.sqft | trim'],
    availability: ['.available | trim'],
    amenities: xray('.descriptionSection', [{
      body: 'p | trim'
    }]),
    petsAllowed: xray('.petPolicy', [{
      petPolicyDetails: ['.petPolicyDetails | trim']
    }]),
    neighborhood: ['.neighborhood | trim'],
    location: ['div.propertyNameRow h1 | trim']
  }).stream()

  // (function (err, description) {
  //  if (err) {
  //    console.log('err', err);
  //  }
  // else {
  //
  //    console.log('\n\n\n\n\n\ndescription\n', description);
  //  }
  // });



  getApartmentInfo.pipe(res);
});

router.put('/listings/', (req, res) => {
  return db('listings')
  .where({
    id: req.headers['listing-id']
  })
  .update(req.body) //REPRESENTS OBJECT CONTAINING ANY EDITS
  .then(function(listings) {
     res.send({updated: listings});
  });
});


module.exports = router;
