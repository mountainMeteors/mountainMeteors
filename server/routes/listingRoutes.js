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
    listings.map(listing => {

    })
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
    lng: req.body.lng,
    url: req.body.url,
    neighborhood: req.body.neighborhood,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    sq_ft: req.body.squareFeet,
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
    bedInfo: xray('.beds', [{
      numberOfBedsLong: '.longText | trim',
      numberOfBedsMedium: '.mediumText | trim',
      numberOfBedsShort: '.shortText | trim'
    }]),
    bathInfo: xray('.baths', [{
      numberOfBathsLong: '.longText | trim',
      numberOfBathsMedium: '.medium | trim',
      numberOfBathsShort: '.shortText | trim'
    }]),
    rentInfo: ['.rent | trim'],
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
    location: ['div.propertyAddress h2 span | trim']
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
