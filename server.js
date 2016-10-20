const path = require('path');
const express = require('express');
const webpack = require('webpack');
const cors = require('cors');
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '.jpg')
  }
})

var upload = multer({ storage: storage })
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



const accountRoutes = require('./server/routes/accountRoutes');
const listingRoutes = require('./server/routes/listingRoutes');
const surveyRoutes = require('./server/routes/surveyRoutes');
const photoRoutes = require('./server/routes/photoRoutes');
const distRoutes = require('./server/routes/distRoutes')

app.use('/api', accountRoutes);
app.use('/api', listingRoutes);
app.use('/api', surveyRoutes);
app.use('/api', photoRoutes);
app.use('/api', distRoutes);



app.use('/uploads', express.static(__dirname + '/uploads'))

app.get('/public/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public/bundle.js'));
});

app.get('/styles/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/styles/style.css'));
});

app.get('/styles/app.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/styles/app.css'));
});

app.get('*', function(req, res) {
  console.log('req.url', req.url);
  res.sendFile(path.join(__dirname, 'client/index.html'));
});




app.listen(process.env.PORT || 2500)

  console.log('Listening at http://localhost:2500');
});
