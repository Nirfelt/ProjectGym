var userSchema = require('../schemas/user_schema');

var mongoService = function () {

  var checkToken = function (query, callback) {
    userSchema.find(query, function (err, user) {
      return callback(err, user);
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
