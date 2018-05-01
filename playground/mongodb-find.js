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

// MongoClient.connect(url, (err, client) => {
//   assert.equal(null, err);
//   console.log("Connected successfully to Mongo DB server");
//   const db = client.db(dbName);
//   // find  document from Todos collection of the 'ToDoApp' database
//   db.collection('Todos').find({ _id: new ObjectID('5ae8b1eeea05439974a1dd81') }).toArray().then((docs) => {
//     console.log(JSON.stringify(docs,undefined,2));
//   },(err) => {
//     console.log('Failed reading the Mongo DB collection -ToDoApp/Todos')
//   });

// MongoClient.connect(url, (err, client) => {
//   assert.equal(null, err);
//   console.log("Connected successfully to Mongo DB server");
//   const db = client.db(dbName);
//   // find  document from Todos collection of the 'ToDoApp' database
//   db.collection('Todos').find().count().then((count) => {
//     console.log(`Count: ${count}`);
//   },(err) => {
//     console.log('Failed reading the Mongo DB collection -ToDoApp/Todos')
//   });
//   client.close();
// });

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log("Connected successfully to Mongo DB server");
  const db = client.db(dbName);
  // find  document from Todos collection of the 'ToDoApp' database
  db.collection('Users').find({name:'Aleksandar Zivkovic'}).toArray().then((doc) => {
    console.log(JSON.stringify(doc,undefined,2));
  },(err) => {
    console.log('Failed reading the Mongo DB collection -ToDoApp/Todos')
  });
  client.close();
});
