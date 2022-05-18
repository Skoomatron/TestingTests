const mongoose = require('mongoose');
const mongooseURL = 'mongodb://localhost/testingTests';

mongoose.connect(mongooseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const db = mongoose.connection;

db.once('connected', () => {
  console.log('MONGO HUNGRY!!');
});

module.exports = db;