const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config()
const cors = require('cors');

const app = express();
const port = process.env.PORT ||  5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://ATGWORLD:Q9F1TBJVXZGzb5CW@cluster0.hty68.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  const atgCollection = client.db("atgWorld").collection("post");
 
  app.post("/addPost", async (req,res) =>{
    console.log(req.body);
    const result = await atgCollection.insertOne(req.body);
    res.json(result);
  })



});


app.get("/", (req, res) => {
  res.send("atg world is live");
});

app.listen(port, () => {
  console.log(`listening at ${port}`)
})