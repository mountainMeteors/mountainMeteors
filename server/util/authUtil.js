const jwt = require('jwt-simple');

exports.createToken = function(req, res, user_id){
  let payload = {'user_id': user_id};
  let secret = 'yabbadabbadoo';
  console.log('secret is', secret);
  let token = jwt.encode(payload, secret);
  res.set('token', token).status(201).json({token: token});
};
