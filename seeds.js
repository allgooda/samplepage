var mongoose = require('./api/config/database');

var User = require('./api/models/user');

var users = [
  {
    username: "adamallgood"
  },
  {
    username: "Jeff5556"
  },
  {
    username: "HellO@74"
  }

]
User.create(users, function(err, users) {
  if (err) {
          console.log(err);
        } else {
          console.log(
            "Database seeded with " + users.length + " users."
          );
          mongoose.disconnect();
        }
});
