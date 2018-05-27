var mongoose = require('mongoose');
const assert = require('assert');
// set mangoo use its own promice library ?!
mongoose.Promise = global.Promise;
// connect mongoose to local mongo db database server listening
// on port 27017 which is the default port,
// and the Database' Name is TodoApp

// Connection URL
const url = 'mongodb://localhost:27017/ToDoApp';
// Database Name
const dbName = 'ToDoApp';

mongoose.connect(url,(err,client) => {
  assert.equal(err,null);
  console.log("Connected successfully to Mongo DB server");
});

module.exports = {mongoose};
