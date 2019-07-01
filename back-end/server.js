var express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const assert = require("assert");
const mongoUrl = "mongodb://localhost:27017/HackathonPub";
const Hackathon = require("./routes/hackathon");
const Club=require ("./routes/club");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //bodyParser middleware

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected dude !"))
  .catch(err => console.log(err));

app.use(Hackathon);
app.use(Club);


app.listen(5000, err => {
  if (err) console.log("server fatal error dude !");
  else console.log("server is running on port 5000");
});

