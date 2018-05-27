// library imports
var express = require ('express');
var bodyParser = require ('body-parser');
// local imports
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json()); // return is function middleware

// this time around we use post method, i.e. our server is going to respond to
// post requests, specifically todos
 app.post('/todos', (req, res) => {
   // just print out request body
   console.log(req.body);
   // create new todo based on the request body text property
   var todo = new Todo({
     text: req.body.text
   });
   // now save the todo to mondodb table
   todo.save().then((doc)=>{
     // send the response back to the caller.
     // the response is success object returned back from the save method, probably a
     // new todo json object as inserted into database
     res.send(doc);
   },(err)=>{
     console.log('An error occurred: ', err);
     res.status(400).send(err);
   })
 });

// now we have a werver listening on port 3000 and a live connection to mongo database - cool!
app.listen(3000, () => {
  console.log('Web server start listening on port 3000.')
});
