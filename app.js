var User = require('./models/users.js');

// create a new user called chris
var Omar = new User({
  first_name: 'Omar',
  meta:{
  age : 29
  }
});

Omar.sayHello();

// Find All
User.find({}, function(err, users) {
  if (err) console.log(err);
  console.log(users);
});
