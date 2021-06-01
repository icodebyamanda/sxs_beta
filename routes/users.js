var express = require("express");
const { sequelize } = require("../models");
var router = express.Router();
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const models = require("../models");
require("dotenv").config(); // To be able to process the supersecret to enhance encryption
var bcrypt = require("bcrypt");
const saltRounds = 10; // encryption generated

const supersecret = process.env.SUPER_SECRET;

//! Create a new user -> Sign Up

router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    await models.Users.create({ email, username, password: hash });

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//! Post User Login

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await models.Users.findOne({ where: { email } });

    if (user) {
      const user_id = user.id;
      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) throw new Error("Incorrect password");
      var token = jwt.sign({ user_id }, supersecret);

      res.send({ message: "Login successful, here is your token", token });
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//! Get all users

router.get('/', function(req, res) {

models.Users.findAll()
  .then((data) => res.send(data))
  .catch((error) => {
    res.status(500).send(error);
  });
});

//! Get one user's profile

    // req.user_id comes from the guard, user_id placed in the request object (coming from the x-access-token in the header) to not have to ask it all the time
    // This is how we will also make personalised request to user

router.get('/profile', userShouldBeLoggedIn, async (req, res) => {
  const id = req.user_id;
  
  try {
    const user = await models.Users.findOne({
        where: {
          id,
        },
      });
    res.send(user);
    } 
    catch (error) {
      res.status(500).send(error);
    }
  });

//! Update one user's profile

router.put('/profile', userShouldBeLoggedIn, async (req, res) => {
  const {email, username, password} = req.body;
  const id = req.user_id;

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    await models.Users.update(
    { email, username, password : hash },
    { where: {
        id,
      },
    });

    res.send({ message: "user updated succesfully!" });
  }
  catch(error) { 
    res.status(500).send(error);
  }
});


// ! Delete User

router.delete('/profile', userShouldBeLoggedIn, async (req, res) => {
  const id = req.user_id;

  try {

  const user = await models.Users.destroy({
    where: {
      id,
    },
    include: models.Selection,
  });
    res.send({message:'User deleted'});
  
  } catch(err) { 
    res.status(500).send(err)};
});

module.exports = router;
