var express = require("express");
const { sequelize } = require("../models");
var router = express.Router();
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const models = require("../models");

//! Create one selection for one user

router.post("/", userShouldBeLoggedIn, async (req, res) => {
  
  const UserId = req.user_id;
  const { mood, format, author, url, description, note } = req.body;

  try {

  await models.Selection.create(
    { UserId, mood, format,  author, url, description, note });

  res.send({message: UserId + ' has added a new selection'});
  }
  catch(error) { 
    res.status(500).send(error);
  }
});

/*

//! Get all selections
router.get("/", function (req, res) {
  models.Selection.findAll()
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
});

*/

//! Get ONE user's all selections <- User's dashboard

router.get('/list', userShouldBeLoggedIn, async (req, res) => {

  const UserId = req.user_id;

  try {

  const list = await models.Selection.findAll({
    where: {
      UserId,
    },
  })
  res.send(list);
  }
  catch (error) {
    res.status(500).send(error);
  }
});

//! Get ONE user's all selections of ONE mood

//! Get ONE user a random selection based on the selected user's mood

//! Delete ONE user's selection based on selection's id

//! Get ALL users' ALL selections

//! Get ALL user's selections of ONE mood

/*

// Get all selections in random order

// //! Get all selections
// router.get("/", function (req, res) {
//   models.Selection.findAll({
//     // limit: 1,
//     order: [
//       [sequelize.fn('RANDOM')
//     ]
//     ]
//   })
//     .then((data) => res.send(data))
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

//! GET all selections of one mood

router.get('/all/:mood', function(req, res) {

  const {mood} = req.params;

  models.Selection.findAll({
    where: {
      mood: `${mood}` 
    },
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => res.status(500).send(err));

 });

//! GET a random selection based on the selected user's mood

// Translate from MYSQL -->> db(`SELECT * FROM responses WHERE mood = "${moodId}" ORDER BY RAND() LIMIT 1;`)

router.get('/:mood', function(req, res) {

  const {mood} = req.params;

  models.Selection.findOne({
    where: {
      mood: `${mood}`
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

*/



module.exports = router;