var mongoService = require('../services/mongodb_user_service');
var userModel = require('../models/user_model');
var validator = require('../utils/user_validator');

var controller = {};

controller.getHistory = function (req, res) {
  var query = {};
  var queryParamsExists = Object.keys(req.query).length !== 0;

  if (queryParamsExists) {
    query = buildQuery(req);
  }

  mongoService.getUser(query, function (err, resultFromDB) {
    if (err) {
      return res.status(500).send({
        error: err,
      });
    }

    if (!resultFromDB) {
      return res.status(400).send({
        error: 'There is no user',
      });
    }

    res.send({
      data: modifyJSONArray(
        JSON.parse(JSON.stringify(resultFromDB))),
    });
  });
};

var buildQuery = function (req) {
  var query = {};
  return query;
};

module.exports = controller;
