const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.verifyAdmin = (req, res, next) => {
  let data = req.headers.authorization;
  if (data === undefined) {
    res.status(401).json({ error: "No token provided" });
  }
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
    req.Id = decoded.Id;

    // myId = req.userId;
    next();
  });
};
