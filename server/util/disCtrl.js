const request = require ('request');
const db = require('../db.js');

var homeAddress;
var targetAddress;
// find target Address from DB
exports.findtargetDist = function(req, res, next){
  // request({
  //
  // })


}
exports.getDistance = function(req, res, next){
  db('listings').where({
    listing_id: req.params.id
  }).select('targetAddress')
  .then(function(results){
    homeAddress = results
  })
  res.send({'homeAddress': homeAddress, 'TargetAddress': targetAddress})
}

const parseDist = function(distBody) {
  var distInfo = {};
  var distRoute = distBody.routes[0].legs;
  distRoute.forEach(function(item){
    distInfo['distance'] = item.distance.text;
    distInfo['duration'] = item.duration.text;
    distInfo['origin'] = item.start_address;
    distInfo['destination'] = item.end_address;
  })
  return distInfo;
}

exports.findDistance = function(req, res, next){
  request({
    url: 'https://maps.googleapis.com/maps/api/directions/json', //URL to hit
    qs: {
      key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
      unit: 'Imperial',
      origin: req.body.origin,
      destination: req.body.destination,
      travelMode: 'DRIVING' }, //Query string data
      method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
      body: '' //Set the body as a string
  }, function(error, response, body){
      if(error) {
          console.error(error);
      } else {
        var bodyInfo = parseDist(JSON.parse(body));
        res.send({'Body': bodyInfo, 'Req': req.body})
          // console.log(response.statusCode, newInfo)
        next();
      }
  });
}


//
// exports.findDistance = function(req, res){
//
//   function initialize() {
//     directionsDisplay = new google.maps.DirectionsRenderer();
//     var centerPosition = new google.maps.LatLng(38.713107, -90.42984);
//     var options = {
//       zoom: 12,
//       center: centerPosition,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     map = new google.maps.Map($('#map')[0], options);
//     geocoder = new google.maps.Geocoder();
//     directionsDisplay.setMap(map);
//     calculateDistances();
//   }
//
//   google.maps.event.addDomListener(window, 'load', initialize);
//   console.log('Hello World')
//   var origin1 = new google.maps.LatLng( 40.7725833, -73.9736894 );
//   // var origin2 = 'Greenwich, England';
//   var destinationA = '1216 Broadway, New York, NY 10001';
//   // var destinationB = new google.maps.LatLng(50.087692, 14.421150);
//
//   var service = new google.maps.DistanceMatrixService();
//   console.log('####service####', service)
//   service.getDistanceMatrix(
//     {
//       key:'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
//       // origins: [origin1, origin2],
//       origin: '125 St.Marks Place, New York, NY 10009',
//       // destinations: [destinationA, destinationB],
//       destinations: '1216 Broadway, New York, NY 10001',
//       travelMode: 'DRIVING',
//       transitOptions: TransitOptions,
//       drivingOptions: DrivingOptions,
//       unitSystem: 'Imperial',
//       avoidHighways: false,
//       avoidTolls: false,
//     }, callback);
//
//   function callback(response, status) {
//     if (status == 'OK') {
//     var origins = response.originAddresses;
//     var destinations = response.destinationAddresses;
//
//     for (var i = 0; i < origins.length; i++) {
//       var results = response.rows[i].elements;
//       for (var j = 0; j < results.length; j++) {
//         var element = results[j];
//         var distance = element.distance.text;
//         var duration = element.duration.text;
//         var from = origins[i];
//         var to = destinations[j];
//         }
//       }
//     }
//   }
//
// }
