var mongoose = require('mongoose');
var User = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    trims: true,
    minlength: 1
  }
});

module.exports = {User};


//
// var user = new User({
//   email: 'alex.peterson.76@gmail.com'
// });
//
//
// user.save().then(res=>{
//   console.log("successfully inserted new user into db.");
// }, err=> {
//   console.log('Failed to insert new user to the db. ', err);
// });
//
