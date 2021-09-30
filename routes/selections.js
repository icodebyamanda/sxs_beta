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

router.get('/list/:mood', userShouldBeLoggedIn, async (req, res) => {

  const UserId = req.user_id;
  const { mood } = req.params

  try {

  const moods = await models.Selection.findAll({
    where: {
      UserId,
      mood: `${mood}`,
    },
  })
  res.send(moods);
  }
  catch (error) {
    res.status(500).send(error);
  }
});

//! Get ONE user a RANDOM selection based on the selected user's mood

router.get('/:mood', userShouldBeLoggedIn, async (req, res) => {

  const UserId = req.user_id;
  const { mood } = req.params

  try {

  const moods = await models.Selection.findOne({
    where: {
      UserId,
      mood: `${mood}`,
    },

    order: sequelize.random()

  })
  res.send(moods);
  }
  catch (error) {
    res.status(500).send(error);
  }
});

//! Delete ONE user's selection based on selection's id <- dashboard

router.delete('/:itemId', userShouldBeLoggedIn, async (req, res) => {
  const UserId = req.user_id;
  const { itemId } = req.params;

  try {
    await models.Selection.destroy({
      where: {
        UserId,
        id: `${itemId}`, 
      },
    });
    res.send({message:'Selection deleted'});
  
  } catch(err) { 
    res.status(500).send(err)};
})



module.exports = router;