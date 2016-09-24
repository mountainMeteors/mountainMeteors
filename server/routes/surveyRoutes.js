const express = require('express')
const router = express.Router()
const surveyUtil = require('../util/surveyUtil.js');

//middleware specific to this router
router.use((req, res, next) => {
  console.log('')
})


module.exports = router;
