
var router = require('express').Router();

router.get('/', function(req, res){
  // console.log('ID', req.body)
  Listing.find(function(err, doc){
    res.json(doc);
  });
});

router.post("/", function(req, res) {
  new Listing ({
    'listingId': req.body.listingId,
    'company': req.body.company,
    'rent': req.body.rent,
    'pets': req.body.pets,
    'gym': req.body.gym,
    'status': req.body.status,
    'modifiedAt': new Date()
  })
  .save(function(err, task){
    res.status(201).json(task)
  });
});

router.delete("/", function(req, res) {
  Job.findByIdAndRemove(req.body._id, function (err) {
    if (err) throw err;
    res.send(req.body);
  });
});

router.put("/", function(req, res) {
  req.body.statusOrder = orders[req.body.status];
  Job.findByIdAndUpdate(req.body._id, req.body, function (err) {
    if (err) throw err;
    res.send(req.body);
  });
});


module.exports = router;
