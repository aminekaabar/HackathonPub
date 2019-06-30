const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SponsorSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
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
  phone:{
    type:Number,
    required:true
  },
  website:{
    type:Number,
    required:true
  }
});

module.exports = Sponsor = mongoose.model("sponsor", SponsorSchema);
