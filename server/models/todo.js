var mongoose = require('mongoose');
// create model, the first argument is a class to create document
var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true, // this is a validator
    minlength: 2,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};


//
// var newTodo = new Todo({
//   text: 'do something !'
// });
//
// newTodo.save().then((res) => {
//   console.log("Success: ", res)
// }, (err) => {
//   console.log("error: ", err)
// });

// var toDoPark = new Todo({
//   text : " new"
//   // text: "Go to the park and play with dog",
//   // completed: true,
//   // completedAt: 452018
// });

// toDoPark.save().then((res)=>{
//   console.log("Success! ", res)
// },(err)=>{
//   console.log("Error!  ",err);
// });
