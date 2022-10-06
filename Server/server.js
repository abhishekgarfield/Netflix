var express = require("express");
var cors = require("cors");
var app = express();
var bcrypt=require("bcrypt");
const {v4}=require("uuid");
app.use(express.json());
app.use(cors());
require("dotenv").config();
var MongoClient = require("mongodb").MongoClient;
var uri = process.env.uri;
const port = process.env.Port;

app.post("/signup", async (req, res) => {
  console.log("signup");
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("users");
    const user_id=v4();
    const hashedpassword=await bcrypt.hash(10,user.password);
    const filtereduser={
      user_id:user_id,
      password:hashedpassword,
      email:user.email,
      profile_pic:user.url
    }
    const result=await collection.insertOne(filtereduser);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

app.get("/getgeneres", async (req, res) => {
  console.log("geners");
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("generes");
    const generes = await collection.find().toArray();
    console.log(generes);
    res.send(generes);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

app.get("/getmovies", async (req, res) => {
  console.log("getmovies");
  const { gener_id } = req.query;
  console.log(gener_id);
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("Movies");
    if (Number(gener_id == 100)) {
      const movies = await collection.find({ show_id: 1 }).toArray();
      console.log(movies);
      return res.send(movies);
    } else if (Number(gener_id == 100)) {
      const movies = await collection.find({ show_id: 2 }).toArray();
      console.log(movies);
      return res.send(movies);
    } else {
      const movies = await collection
        .find({ gener_id: Number(gener_id) }).sort({id:1})
        .toArray();
      console.log(movies);
      return res.send(movies);
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

app.get("/getmovie", async (req, res) => {
  console.log("getmovie");
  const { movie_id } = req.query;
  console.log(typeof movie_id);
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("Movies");
     const movie = await collection.findOne({ id: Number(movie_id) });
    console.log(movie);
    return res.send(movie);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
