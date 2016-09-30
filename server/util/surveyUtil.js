
const db = require('../db2.js');
const express = require ('express');
module.exports = {
  survey: {
    get: (req, res) => {
      // let queryStr = 'select survey.id, '
        db.select().table('bearTest')
        .then((results) => {
          res.send(results);
      })
    },
    post: (req, res) => {
      console.log('#####REQBODY####', req.body);
      // let params = {id: req.body.id, price: req.body.price, pets: req.body.pets}
      db.insert({
        address: req.body.address,
        price: req.body.price,
        brs: req.body.brs,
        amenity: req.body.amenity,
        date: new Date()

      }).into('bearTest')
      .then(() => {
        res.send('work')
      })
    }
  }
}
