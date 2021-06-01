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

//! Would need update when authentication is done

//! Create a new user -> Sign Up

router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    await models.User.create({ email, username, password: hash });

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//! Post User Login

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await models.User.findOne({ where: { email } });

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

models.User.findAll()
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
    const user = await models.User.findOne({
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
  await models.User.update(
    { email, username, password },
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

router.delete('/profile', function (req, res) {
  const id = req.UserId;

  models.User.destroy({
    where: {
      id
    },
  })
  .then((data) => {
    res.send({message:'User deleted'});
  })
  .catch(err => res.status(500).send(err));
});

module.exports = router;
