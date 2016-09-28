
//Creates schema for storing app's data. Creates user, survey response tables

const config = require('./config')

console.log("config.host", config.host)
const db = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
  }
});

db.raw('select 1+1 as result').then(function () {
  console.log('you are connected');
});

db.schema.hasTable('users').then(function(exists){
  if(!exists){
    return db.schema.createTable('users', function(user) {
      user.increments('id').primary();
      user.string('email', 50).unique();
      user.string('password', 50);
      user.string('firstName', 50);
      user.string('lastName', 50);
      user.timestamps();
      console.log('Created users table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
});

db.schema.hasTable('listings').then(function(exists){
  if(!exists){
    return db.schema.createTable('listings', function(user) {
      user.increments('id').primary();
      user.string('location', 255).unique();
      user.string('rent', 50);
      user.string('pets', 50);
      user.integer('sq_ft');
      user.boolean('gym');
      user.boolean('washer_dryer');
      user.boolean('dishwasher');
      user.boolean('no_fee');
      user.timestamps();
      console.log('Created listings table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
});


db.schema.hasTable('Rankings').then(function(exists){
  if(!exists){
    return db.schema.createTable('Rankings', function(user) {
      user.increments('id').primary();
      user.integer('neighborhood');
      user.integer('rent');
      user.integer('pets');
      user.integer('amenities');
      user.integer('commute');
      user.integer('extras');
      console.log('Created rankings table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
});


module.exports = db;
