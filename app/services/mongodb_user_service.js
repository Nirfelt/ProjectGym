var userSchema = require('../schemas/user_schema');

var mongoService = function () {

  var checkToken = function (query, callback) {
    userSchema.find(query, function (err, user) {
      return callback(err, user);
    });
  };

  var insertUser = function (userToAdd, callback) {
    var newUser = new UserSchema(userToAdd);
    newUser.save(function (err, response) {
      if (err) {
        return callback(err, null);
      }

      var r = {
        email: response.email,
      };
      return callback(null, r);
    });
  };

  var getUser = function (query, callback) {
    userSchema.find(query, function (err, user) {
      return callback(err, user);
    });
  };

  return {
    getUser: getUser,
  };
};

module.exports = mongoService();
