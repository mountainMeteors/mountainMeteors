const jwt = require('jwt-simple');
const secret = require('../config.js').jwtsecret;

exports.createToken = function(req, res, user_id){
  var payload = {'user_id': user_id};
  var token = jwt.encode(payload, secret);
  res.set('token', token).status(201).json({token: token, user_id: user_id});
};

exports.checkToken = function(req, res, next){
  if(!req.headers['x-access-token']){
    console.log('TOKEN CHECK IS 401');
    res.sendStatus(401);
  } else {
    console.log('FOUND TOKEN');
    // console.log('header', req.headers['x-access-token']);
    // console.log('secret', secret);
    var decodedToken = jwt.decode(req.headers['x-access-token'], secret);
    req.user = {};
    req.user.id = decodedToken.user_id;
    next();
  }

};
