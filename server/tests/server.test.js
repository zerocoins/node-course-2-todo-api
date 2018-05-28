const expect = require ('expect');
const request = require ('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  text:"First todo: do something very important"
},{
  text: "Second todo: go to the grosery shop"
}];

// before each test clear out todos collectoin and insert 2 todos.
beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(() => done());
});

// beforeEach((done)=>{
//   // use mongoose method insert many to insert an array of predefined todos
//   Todo.remove({}).then(() => {
//     return Todo.insertMany(todos); // return allows to chaing callbacks
//   }).then(() => done()); // whenever the previous call completes, call done
// });

// group tests with describe
describe('POST/todos', () => {

  it('should create a new todo', (done) => {
    var text = 'Test todo text';
    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect( (res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err,res) => {
        if (err) {
          return done(err);
        }
        Todo.find({text}).then((todos)=>{
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e)=>done(e));
    });
  });

  it('should not create a new todo because of invalid body data', (done) => {
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos)=>{
          expect(todos.length).toBe(2);
          done();
        }).catch((e)=>done(e));
    });
  });
});


describe('GET/todos', () => {
  it('should get all todos', (done) => {
    request(app).
    get('/todos').
    expect(200).
    expect((res)=>{
      expect(res.body.todos.length).toBe(2);
    }).end(done);
  });
});
