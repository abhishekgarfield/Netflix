var express = require("express");
var cors = require("cors");
var app = express();
var bcrypt = require("bcrypt");
const { v4 } = require("uuid");
app.use(express.json());
const jwt = require("jsonwebtoken");
app.use(cors());
require("dotenv").config();
var MongoClient = require("mongodb").MongoClient;
var uri = process.env.uri;
const port = process.env.Port;

app.post("/signup", async (req, res) => {
  console.log("signup");
  const { user } = req.body;
  console.log(user);
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("users");
    const user_id = v4();
    const sentitizedEmail = user.email.toLowerCase();
    const hashedpassword = await bcrypt.hash(user.password, 10);
    const filtereduser = {
      user_id: user_id,
      password: hashedpassword,
      email: sentitizedEmail,
      profile_pic: user.url,
    };
    const resp = await collection.findOne({ email: sentitizedEmail });
    if (resp) {
      return res.status(403).json({ error: "User already exists !" });
    } else {
      const result = await collection.insertOne(filtereduser);
      const token = jwt.sign(result, user.email, {
        expiresIn: 60 * 24,
      });
      console.log(result);
      res.status(200).json({ token: token, user_id: user_id });
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

app.post("/login", async (req, res) => {
  console.log("login");
  const { user } = req.body;
  console.log(user);
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("users");

    const sentitizedEmail = user.email.toLowerCase();

    const resp = await collection.findOne({ email: sentitizedEmail });
    if (resp) {
      const checkPassword = await bcrypt.compare(user.password, resp.password);
      if (checkPassword) {
        const token = jwt.sign(resp, user.email, {
          expiresIn: 60 * 24,
        });
        return res.status(200).json({ token: token, user_id: resp.user_id });
      } else {
        return res.status(403).json({ error: "Password is incorrect !" });
      }
    } else {
      res.status(403).json({ error: "User doesnt Exist , please sign up !" });
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});
app.get("/user", async (req, res) => {
  console.log("user");
  const{user_id}=req.query;
  console.log(user_id);
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("users");
    const user = await collection.findOne({user_id:user_id});
    console.log(user);
    res.send(user);
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
  const filteredgener_id=parseInt(gener_id)
  console.log(filteredgener_id)
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("Movies");
    if ((filteredgener_id == 100)) {
      const movies = await collection.find({ show_id: 1 }).toArray();
      console.log(movies);
      return res.send(movies);
    } else if ((filteredgener_id == 100)) {
      const movies = await collection.find({ show_id: 2 }).toArray();
      console.log(movies);
      return res.send(movies);
    }
    else if(gener_id.slice(0,6)=="search"){
      console.log("IN STRING")
      const movies = await collection.find({ name: {$regex: `(^(${gener_id.slice(7)}.*)$)`,$options:"i" }}).toArray();
      console.log(movies);
      return res.send(movies);
    }else  {
      const movies = await collection
        .find({ gener_id: (filteredgener_id) })
        .sort({ id: 1 })
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
