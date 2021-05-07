var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//! GET responses table
router.get("/", function(req, res, next) {
  db("SELECT * FROM responses;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//! GET a random response from the mood
router.get("/:mood", function(req, res, next) {

  const moodId = req.params.mood;
  db(`SELECT * FROM responses WHERE mood = "${moodId}" ORDER BY RAND() LIMIT 1;`)
  .then(results => {
    res.send(results.data[0]);
  })
  .catch(err => res.status(500).send(err));
});

//! INSERT a new entry
router.post("/", function(req, res, next) {

  const { mood, format,  author, url, description, note } = req.body;
  db(`INSERT INTO responses (mood, format,  author, url, description, note) VALUES ("${mood}", "${format}", "${author}", "${url}", "${description}", "${note}");`)
  .then((results) => {
    res.send({message: "New Entry added"});
  })
  .catch((err) => res.status(500).send(err));
});

module.exports = router;
