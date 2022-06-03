const jwt = require("jsonwebtoken");

const register = require("../Model/signUpModel");

require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    let data = req.headers.authorization;
    console.log(data.split(" ")[1]);
    jwt.verify(data.split(" ")[1], process.env.secret_key);
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};
