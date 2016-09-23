const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const apiRouter = require('./server/router.js');
const jwt = require('express-jwt');
const cors = require('cors');
const app = express();
const compiler = webpack(config);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// const authCheck = jwt({
//
// })
//need to decide on authentication middleware

//
// var users = [
//   {
//     id: 1,
//     name: 'Sam Gowda',
//     email: 'samgowda@gmail.com'
//   },
//   {
//     id: 2.
//     name: "Wen Tran",
//     email: 'wen@gmail.com'
//   }
// ]

// app.get('/api/login', (req, res) => {
//   const allUsers = users.map(user => {
//     return {id: user.id, name: user.name}
//   })
//   res.json(allUsers);
// })
//
// app.get('/api/login/:id', authCheck, (req, res) => {
//   res.json(users.filter(user => user.id === parseInt(req.params.id)));
// })

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
// app.use("/api", apiRouter);

app.get('*', function(req, res) {
  console.log('req.url', req.url);
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/results', (req, res) => {
  res.send('got here');
});

app.listen(7779, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7779');
});
