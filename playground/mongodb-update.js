// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err)
    {
        return console.log('Unable to connect to the mongodb server');
    }
    console.log('Connected to the mongodb server');

    // Delete many
    // db.collection('todos').deleteMany({text: 'Learn'}).then((result) => {
    //     console.log(result);
    // })

    // Delete one
    // db.collection('todos').deleteOne({text: 'Learn'}).then((result) => {
    //     console.log(result);
    // });

    // Delete one
    db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    // db.close();
});
