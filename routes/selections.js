var express = require("express");
const { sequelize } = require("../models");
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

// Get all selections in random order

//! Get all selections
router.get("/", function (req, res) {
  models.Selection.findAll({
    // limit: 1,
    order: [
      [sequelize.fn('RANDOM')
    ]
    ]
  })
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
});

//! GET all selections of one mood

// router.get('/:mood', function(req, res) {

//   const {mood} = req.params;

//   models.Selection.findAll({
//     where: {
//       mood, 
//     },
//   })
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => res.status(500).send(err));

//  });

//! GET a random selection based on the selected user's mood

// Translate from MYSQL -->> db(`SELECT * FROM responses WHERE mood = "${moodId}" ORDER BY RAND() LIMIT 1;`)

router.get('/:mood', function(req, res) {

  const {mood} = req.params;

  models.Selection.findAll({
    where: {
      mood, 
    },

    // Below is alternative
    // order: models.sequelize.random(), limit: 1

    order: sequelize.random(), limit: 1
    
  })
  .then(data => {
    res.send(data)[0];
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