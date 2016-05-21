var express = require('express');
var router = express.Router();

var userController = require('../controllers/user_controller');
var auth = require('../middleware/user_auth');

/**
 * Endpoint for /
 * HTTP method: GET
 */
router.get('/', auth.requiresLogin, function(req, res, next) {
  userController.getUser(req, res);
});
/*
 * Endpoint for /
 * HTTP method: POST
 */
router.post('/', function(req, res, next) {
  userController.postSignup(req, res);
});
/*
 * Endpoint for /
 * HTTP method: PUT
 */
router.put('/', auth.requiresLogin, function(req, res, next) {
  userController.putUpdateUser(req, res);
});

router.put('/password', auth.requiresLogin, function(req, res, next) {
  userController.putChangePassword(req, res);
});

module.exports = router;
