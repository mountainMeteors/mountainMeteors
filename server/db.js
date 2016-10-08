
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
      // foreign key connecting to user tab
      user.string('email', 50).unique();
      user.string('password', 50);
      user.string('firstName', 50);
      user.string('lastName', 50);
      user.text('prefs', 'longtext');
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
    return db.schema.createTable('listings', function(listing) {
      listing.increments('id').primary();
      listing.integer('user_id').unsigned();
      listing.foreign('user_id').references('id').inTable('users');
      listing.string('url', 900).unique();
      listing.string('location', 255).unique();
      listing.string('neighborhood', 255);
      listing.string('bedrooms', 100);
      listing.string('bathrooms', 100);
      listing.string('rent', 50);
      listing.string('pets', 50);
      listing.integer('sq_ft');
      listing.boolean('gym');
      listing.boolean('washer_dryer');
      listing.boolean('laundry');
      listing.boolean('doorman');
      listing.boolean('dishwasher');
      listing.boolean('garage');
      listing.boolean('pool');
      listing.boolean('elevator');
      listing.boolean('outdoor_space');
      listing.boolean('no_fee');
      listing.boolean('archived');
      listing.timestamps();
      console.log('Created listings table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
});


db.schema.hasTable('listingPhotos').then(function(exists){
  if(!exists){
    return db.schema.createTable('listingPhotos', function(photo) {
      photo.increments('id').primary();
      photo.foreign('listing_id').references('id').inTable('listings');
      photo.string('name', 255).unique();
      photo.timestamps();
      console.log('Created listingPhotos table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
});

// 1216 Broadway, Apt 2A
// 109 Greenwich Ave, Apt 4C
// 261 Lorimer St, Apt 2B
// 385 Flatbush Ave, Apt 3D

db.schema.hasTable('Rankings').then(function(exists){
  if(!exists){
    return db.schema.createTable('Rankings', function(ranking) {
      ranking.increments('id').primary();
      ranking.integer('neighborhood');
      ranking.integer('rent');
      ranking.integer('pets');
      ranking.integer('amenities');
      ranking.integer('commute');
      ranking.integer('extras');
      console.log('Created rankings table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
});




module.exports = db;
