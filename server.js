const path = require('path');
const express = require('express');
const webpack = require('webpack');
// const config = require('./webpack.config');
// const webpackMiddleware = require('webpack-dev-middleware');
const cors = require('cors');
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })
// const compiler = webpack(config);
const bodyParser = require('body-parser');

const app = express();
const router = express.Router()

// router.use((req, res, next) => {
//   console.log('routing all requests');
//   next();
// });
// app.use(webpackMiddleware(compiler))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(upload.any())

const surveyFormRoutes = require('./server/routes/surveyFormRoutes');
const accountRoutes = require('./server/routes/accountRoutes');
const listingRoutes = require('./server/routes/listingRoutes');
const surveyRoutes = require('./server/routes/surveyRoutes');

app.use('/api', accountRoutes);
app.use('/api', listingRoutes);
app.use('/api', surveyRoutes);
app.use('/api', surveyFormRoutes);


app.get('/public/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public/bundle.js'));
});

app.get('/styles/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/styles/style.css'));
});

app.get('*', function(req, res) {
  console.log('req.url', req.url);
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(2500, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:2500');
});
