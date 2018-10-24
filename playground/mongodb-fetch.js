
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err)
    {
       return console.log('Unable connect to mongo db');
    }else{

    }
    console.log('connected to MongoDb');
    
    const db = client.db('TodoApp');
    
    // //{ completed:false}
    // db.collection('Todos').find({_id: new ObjectID('5bcc29011640f041bcf70749')} ).toArray().then((doc)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(doc,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch',err);
    // })


    // db.collection('Users').find().count().then((count)=>{
    //     console.log(`Users count ${count}`);
    // },(err)=>{
    //     console.log('unable to fetch',err);
    // })

    db.collection('Users').find().toArray().then((docs)=>{
        console.log(`Users`);
        console.log(JSON.stringify(docs,undefined,2));
        
    },(err)=>{
        console.log('unable to fetch',err);
    })


    client.close();
})