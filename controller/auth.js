const jwt = require("jsonwebtoken");

const register = require("../Model/signUpModel");

exports.auth = async (req, res, next) => {
  try {
    const token = jwt.verify(req.cookies.token, process.env.secretKey);
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};
