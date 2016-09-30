const jwt = require('jwt-simple');
const secret = require('../config.js').jwtsecret;

exports.createToken = function(req, res, user_id){
  let payload = {'user_id': user_id};
  // let secret = 'yabbadabbadoo';
  console.log('secret is', secret);
  let token = jwt.encode(payload, secret);
  res.set('token', token).status(201).json({token: token, user_id: user_id});
};

exports.checkToken = function(request, response, next){
  console.log('~~~CHECKING TOKEN. req:', request.headers['x-access-token']);
  next();

  // if(!request.headers['x-access-token']){
  //   console.log('TOKEN CHECK IS 401');
  //   response.sendStatus(401);
  // } else {
  //   console.log('FOUND TOKEN');
  //   var decodedToken = jwt.decode(request.headers['x-access-token'], secret);
  //   request.user = {};
  //   request.user.id = decodedToken.user_id;
  //   next();
  // }
};
