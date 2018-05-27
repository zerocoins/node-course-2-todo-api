//const mongodb = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// we can destructure a couple of variables at the same time
var obj = new ObjectID();
// with the new objectid we actually create new id for the purposes

const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/ToDoApp';

// Database Name
const dbName = 'ToDoApp';

// var user = {name:'andrew', age:25};
// // object destructuring
// var {name} = user;
// console.log('name: ',name);

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log("Connected successfully to Mongo DB server");
  const db = client.db(dbName);
  // insert new document into Todos collection of the 'ToDoApp' database

  db.collection('Todos').insertOne({ // collection of documents named Todos - insertMany , insertOne
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err)
    {
      return console.log('Unable to insert todo ',err);
    }
    else {
      console.log(JSON.stringify(result.ops,undefined,2));
      console.log('Inserted new document');
    }
  });

// insert new doc into users collectioin
// each doc has properties: name, location, age

  db.collection('Users').insertOne({
    _id: obj,
    name: 'Peter Jackson',
    age: 42,
    location: 'New York'
  },(err, res) => {
    if (err) {
      console.log('Something went wrong ',err);
    }
    else {
      console.log('successfully created new document:');
      // result.ops is an array of all the documents that got inserted
      // console.log(JSON.stringify(res.ops,undefined,2));
      //console.log(res.ops[0]._id); // print out the id to the screen
      console.log(res.ops[0]._id); // print out the id to the screen - time
    }
  });

  client.close();
});
