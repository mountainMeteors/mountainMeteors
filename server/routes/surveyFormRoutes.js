// const express = require('express');
const router = require('express').Router();
const ctrl = require('../util/surveyUtil.js');

router.get('/userSurvey', ctrl.survey.get);
router.post('/userSurvey', ctrl.survey.post);



module.exports = router;
