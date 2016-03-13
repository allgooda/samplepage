var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var env = require('../config/environment');
var User = require("../models/user");
var usersController = require('../controllers/users');

// router.get('/users', function(req, res) {
//   res.send("Hello World");
// })

router.get('/users', usersController.index);
router.post('/users', usersController.create);

module.exports = router
