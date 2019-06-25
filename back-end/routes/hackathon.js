var express = require('express');
var router = express.Router();
const Hackathon = require("../models/hackathon");



/* POST: adding hackathon ! */
router.post("/add-hackathon", (req, res) => {
  let hackathonFields = {};
  if (req.body.name) hackathonFields.name = req.body.name;
  if (req.body.club) hackathonFields.club = req.body.club;
  if (req.body.sponsors) hackathonFields.sponsors = req.body.sponsors;
  if (req.body.date) hackathonFields.date = req.body.date;
  if (req.body.description) hackathonFields.description = req.body.description;
  if (req.body.image) hackathonFields.image = req.body.image;

  new Hackathon(hackathonFields)
    .save()
    .then(hackathon => res.json(hackathon))
    .catch(err => console.log(err));
});


/* GET: listing hackathons ! */
router.get("/hackathon", (req, res) => {
  Contact.find()
    .then(hackathons => res.json(hackathons))
    .catch(err => console.log(err));
});


/* PUT: updating a ackathon */
router.put("/modify-hackathon/:id", (req, res) => {
  Hackathon.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...req.body } },
    { new: true }
  )
    .then(updated => res.json(updated))
    .catch(err => console.log(err));
});


/* DELETE: deleting a hackathon */
router.delete("/delete-hackathon/:id", (req, res) => {
  Contact.findOneAndDelete({ _id: req.params.id })
    .then(deleted => res.json({ message: "done" }))
    .catch(err => console.log(err));
});

  module.exports = router;
