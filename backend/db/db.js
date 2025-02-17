const mongoose = require('mongoose');

function connectToDb() {
  mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((error) => {
      console.log('Database connection error:', error);
    });
}

module.exports = connectToDb;
