var express = require("express");
var router = express.Router();
var models = require("../models");


//! Get all selections
router.get("/", function (req, res) {
  models.Selection.findAll()
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
});

//! GET a random selection based on the selected user's mood

router.get('/:mood', function(req, res, next) {

  const {mood} = req.params;

  models.Selection.findAll({
    where: {
      mood, 
    }, 
    order: sequelize.random('mood'),
    limit: 1
  })
  .then(data => {
    res.send(data[0]);
  })
  .catch(err => res.status(500).send(err));

 });

//! Create a new selection

router.post("/", function(req, res) {
  const { mood, format, author, url, description, note } = req.body;
  models.Selection.create({ mood, format,  author, url, description, note })
  .then((data) => {
    res.send({message: "New Selection added"});
  })
  .catch((err) => {res.status(500).send(err)});
});


module.exports = router;