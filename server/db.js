
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
      listing.increments('id').primary();

      listing.string('location', 255).unique();
      listing.string('rent', 50);
      listing.string('pets', 50);
      listing.integer('sq_ft');
      listing.boolean('gym');
      listing.boolean('washer_dryer');
      listing.boolean('dishwasher');
      listing.boolean('no_fee');
      listing.timestamps();
      console.log('Created listings table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
});


module.exports = db;
