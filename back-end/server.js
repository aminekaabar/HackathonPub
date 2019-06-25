var express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const assert = require("assert");
const mongoUrl = "mongodb://localhost:27017/HackathonPub";
const hackathon = require("./routes/hackathon");


app.use(bodyParser.json());

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected dude !"))
  .catch(err => console.log(err));

app.use(Hackathon);


app.listen(5000, err => {
  if (err) console.log("server fatal error dude !");
  else console.log("server is running on port 5000");
});

module.exports = server;
