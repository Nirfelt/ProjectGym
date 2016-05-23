var mongoService = require('../services/mongodb_user_service');

var auth = {};

auth.requiresLogin = function (req, res, next) {
  console.log('in requiresLogin function');
  console.log(req.body.token);
  console.log(req.query.token);
  var token = req.body.token;
  var email = req.body.email;
  if (!token || !email) {
    token = req.query.token;
    email = req.query.email;
    if (!token) {
      return res.status(400).send({
        message: 'Missing token',
      });
    }

    if (!email) {
      return res.status(400).send({
        message: 'Missing email',
      });
    }
  }

  mongoService.checkToken(email, function (err, result) {
    if (!result || result === undefined) {
      return res.status(400).send({
        message: 'Invalid token or user not found',
      });
    }

    if (result.token !== req.body.token) {
      return res.status(400).send({
        message: 'Invalid token',
      });
    }

    next();
  });
};

module.exports = auth;
