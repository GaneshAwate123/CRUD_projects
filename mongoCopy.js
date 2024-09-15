const {MongoClient} = require('mongodb');
const url='mongodb://0.0.0.0:27017';

const client = new MongoClient(url);
// console.log("response"); 

async function dbConnect(){
    let result = await client.connect();
    console.log("connecting");
    db = result.db('new');
    return db.collection('students');
    // let response= await collection.find({}).toArray();
    
    

};

module.exports = dbConnect;