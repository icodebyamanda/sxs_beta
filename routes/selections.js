var express = require("express");
var router = express.Router();
var models = require("../models");

router.get('/', (req, res) => {
  res.send('it works');
});

module.exports = router;