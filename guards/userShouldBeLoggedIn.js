var jwt = require("jsonwebtoken");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

/*
1. First check there is a token in the request
  1.1. token would be sent in the header of the request -> choice made -> x-access-token
2. If there isn't, send an error back
3. if there is a token: 
  3.1. verify that is valid -> use jwt verify function with two arguments: token and supersecret key
    3.1.1. If not, send an error
    3.1.2. If valid, proceed and return the information
*/

function userShouldBeLoggedIn(req, res, next) {
  let token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).send({ message: "please provide a token" });
  } else {
    jwt.verify(token, supersecret, function (err, decoded) {
      if (err) res.status(401).send({ message: err.message });
      else {
        //everything is awesome
        req.user_id = decoded.user_id;
        next();
      }
    });
  }
}

module.exports = userShouldBeLoggedIn;