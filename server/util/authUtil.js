const jwt = require('jwt-simple');

exports.createToken = function(req, res, user_id){
  var payload = {'user_id': user_id};
  var secret = 'yabbadabbadoo';
  console.log('secret is', secret);
  var token = jwt.encode(payload, secret);
  res.set('token', token).status(201).json({token: token, user_id: user_id});
};
