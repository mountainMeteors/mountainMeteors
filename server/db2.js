const config = require('./config');

const db = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
  }
});

db.raw('select 1+1 as result').then(() => {
  console.log('you are connected');
});

db.schema.hasTable('bearTest').then(function(exists){
  if(!exists){
    return db.schema.createTable('bearTest', function(answer) {
      answer.increments('id').primary();
      answer.string('address', 50);
      answer.string('brs', 50);
      answer.integer('price', 50);
      
      console.log('Created users table');
    })
    .catch(function(err){
      console.error(err);
    });
  }
})

module.exports = db;
