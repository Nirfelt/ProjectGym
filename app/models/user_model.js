var validator = require('../utils/user_validator');
var uuid = require('node-uuid');

var UserModel = function (firstName, lastName,
  email, birthdate, image, password, userID) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.birthdate = birthdate;
  this.password = password;
  this.userID = userID;
  this.image = image;
  this.token = uuid.v4();
};

module.exports = UserModel;
