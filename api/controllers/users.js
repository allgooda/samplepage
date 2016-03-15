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

  var allUsers = {};

  User.find({},function (err, user) {
    allUsers[user._id] = user;
    console.log(req.body.username);
    checkUsername(allUsers);
  });

  var checkUsername = function(users) {

    var check = 0;
    for(var i = 0; i<users.undefined.length; i++){
      if(users.undefined[i].username == req.body.username) {
        check = check + 1;
        console.log('match');

      }
    }
    console.log(check);
    if(check === 0){ //username is not taken
      console.log('yup');
      createUser();
    } else {
      res.send('user taken');
    }



  }

  var createUser = function () {
    console.log('creating');
    User.create(req.body, function(err, user){
      console.log(user);
      if(err) {
        res.send(err);
      }
        res.json(user);
    });

  }

}


module.exports = {
  index:index,
  create:create
}
