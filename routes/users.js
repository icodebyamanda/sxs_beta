var express = require("express");
const { sequelize } = require("../models");
var router = express.Router();
const models = require("../models");

//! Create a new user

router.post('/', function(req, res) {
  const { email, username, password } = req.body;
  models.User.create({email, username, password})
  .then((data) => {
    res.send({message:'New User added'});
  })
  .catch((err) => {res.status(500).send(err)});
});


//! Get all users

router.get('/', function(req, res) {

models.User.findAll()
  .then((data) => res.send(data))
  .catch((error) => {
    res.status(500).send(error);
  });
});

//! Get one user

router.get('/:userId', function(req, res) {
  const {userId} = req.params;

  models.User.findOne({
    where: {
      id: `${userId}`
    },
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => res.status(500).send(err));
})


module.exports = router;
