const jwt = require('jwt-simple');
const secret = require('../config.js').jwtsecret;

exports.createToken = function(req, res, user_id){
  console.log('creating with secret', secret);
  var payload = {'user_id': user_id};
  // var secret = 'yabbadabbadoo';
  // console.log('secret is', secret);
  var token = jwt.encode(payload, secret);
  res.set('token', token).status(201).json({token: token, user_id: user_id});
};

exports.checkToken = function(req, res, next){
  console.log('~~~CHECKING TOKEN. req:', req.headers['x-access-token']);
  console.log('checking with secret', secret);
  if(!req.headers['x-access-token']){
    console.log('TOKEN CHECK IS 401');
    res.sendStatus(401);
  } else {
    console.log('FOUND TOKEN');
    var decodedToken = jwt.decode(req.headers['x-access-token'], secret);
    req.user = {};
    req.user.id = decodedToken.user_id;
    next();
  }
  // next();

};
