const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/jsmeetup';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to----------: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log('this is err------', err);
  });

module.exports = db;