// library imports
var express = require ('express'); //
var bodyParser = require ('body-parser');
// local imports
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json()); // return is function middleware

// here we register post request handler
 app.post('/todos', (req, res) => {
   // just print out request body
   console.log(req.body);
   // create new todo based on the request body text property
   var todo = new Todo({
     text: req.body.text
   });
   // now save the todo to mongodb table
   todo.save().then((doc) => {
     // send the response back to the caller.
     // the response is success object returned back from the save method, probably a
     // new todo json object as inserted into database
     res.send(doc);
   },(err)=>{
     console.log('An error occurred: ', err);
     res.status(400).send(err);
   })
 });

// define get request web application handler
 app.get('/todos', (req, res) => { // by providing a callback this is how we get
   // our request and response object
   // find all Todo objects,
   // we can get result in todos via callback or an console.error;
   Todo.find().then((todos) => {
     // if we got the result object, use response object to send back to caller - client app
     res.send({todos})
   }, (e) => {
     // we got error while fetching data from the db, send back the status 400 and
     // error message
     res.status(400).send(e);
   });
 });

// now we have a werver listening on port 3000 and a live connection to mongo database - cool!
app.listen(3000, () => {
  console.log('Web server start listening on port 3000.')
});

module.exports = {app};

// no change
