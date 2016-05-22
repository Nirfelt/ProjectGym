var userSchema = require('../schemas/user_schema');

var mongoService = function () {

  var getUser = function (query, callback) {
    CoffeeSchema.find(query, function (err, user) {
      return callback(err, user);
    });
  };

  return {
    getUser: getUser,
  };
};

module.exports = mongoService();
