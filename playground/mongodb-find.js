// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err)
    {
        return console.log('Unable to connect to the mongodb server');
    }
    console.log('Connected to the mongodb server');

    // db.collection('todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({name: 'Sathish'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
    db.close();
});
