var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Date,
  password: String,
  userID: String,
  image: String,
  token: String,
});

module.exports = mongoose.model('User', userSchema);
