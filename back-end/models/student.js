const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  level_of_studies:{
      type: String,
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
  phone:{
    type:Number,
    required:true
  }
});

module.exports = Student = mongoose.model("student", StudentSchema);
