const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  name: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  website:{
    type:String,
  },
  phone:{
    type:Number
  }
});

module.exports = Club = mongoose.model("club", ClubSchema);
