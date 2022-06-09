const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.verifyToken = (req, res, next) => {
  let data = req.headers.authorization;
  let token = data.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, process.env.secret_key, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.UserId = decoded.Id;

    // myId = req.userId;
    next();
  });
};
