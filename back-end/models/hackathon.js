const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HackathonSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  club: {
    type: String,
    required: true
  },
  sponsor: {
    type: String,
    required: true
  }
});

module.exports = Hackathon = mongoose.model("hackathon", HackathonSchema);
