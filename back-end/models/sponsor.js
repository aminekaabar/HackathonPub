const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SponsorSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = Sponsor = mongoose.model("sponsor", SponsorSchema);
