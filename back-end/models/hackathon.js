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
  date:{
    type: Date,
    required: true
  },
  description:{
    type:String,
    required: true
  },
  sponsor_list: {
    type: Array,
    required: true
  },
  student_list:{
    type: Array,
    required:true
  },
  image:{
    type:String,
    required:true
  }
});

module.exports = Hackathon = mongoose.model("hackathon", HackathonSchema);
