const MongoClient = require('mongodb').MongoClient;

//const {MongoClient,ObjectID} = require('mongodb');

// var user ={name:'Name01',age:28}
// var {name}=user;
// console.log(name);


// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err)
    {
       return console.log('Unable connect to mongo db');
    }else{

    }
    console.log('connected to MongoDb');
    
    const db = client.db('TodoApp');

   

    // db.collection('Todos').insertOne({
    //     text:'Text01',
    //     completed:false,

    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })


    db.collection('Users').insertOne({
        //_id:123,
        name:'Name01',
        age:28,
        location:'Tehran'

    },(err,result)=>{
        if(err){
            return console.log('unable to insert todo',err);
        }
        //console.log(JSON.stringify(result.ops,undefined,2));
        //console.log(JSON.stringify(result.ops[0]._id));
        console.log(result.ops[0]._id.getTimestamp());

    })





    client.close();
})