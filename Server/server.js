var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
var MongoClient = require("mongodb").MongoClient;
var uri = process.env.uri;
const port = process.env.Port;

app.get("/getgeneres", async(req, res)=>
{console.log("geners")
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection =await database.collection("generes");
    const generes=await collection.find().toArray();
    console.log(generes)
    res.send(generes)
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

app.get("/getmovies", async(req, res)=>
{console.log("getmovies")
const {gener_id}=req.query;
console.log(typeof(gener_id));
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection =await database.collection("Movies");
    const movies=await collection.find({"gener_id" : Number(gener_id)}).toArray();
    console.log(movies)
    res.send(movies)
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});