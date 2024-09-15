const dbConnect = require('./mongoCopy');
const express = require('express');
const mongoDb = require('mongodb');
var cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',async (req,resp)=>{
    let data = await dbConnect();
    data=await data.find().toArray();
    // console.log(data);
    resp.send(data)
});

app.post('/',async (req,resp)=>{
    
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result);
    // resp.send({name:"anil"})
})

app.put('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )
    resp.send({result:"update"})
})

app.delete("/:id",async (req,resp)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})

    resp.send(result); 
})

app.listen(5000);