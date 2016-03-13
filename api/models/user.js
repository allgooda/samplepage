var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

mongoose.Promise = Promise;

var userSchema = new mongoose.Schema({
  username: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
