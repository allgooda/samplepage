var User = require("../models/user");
var mongoose = require('mongoose');
var env = require("../config/environment");


var index = function(req, res, next) {
  User.find({}, function(error, users) {
    res.json(users);
  });
}

var create = function(req, res, next) {
  console.log("creating user");
  User.create(req.body, function(err, user){
    console.log(user);
    if(err) {
      res.send(err);
    }
      res.json(user);
  });
}


module.exports = {
  index:index,
  create:create
}
