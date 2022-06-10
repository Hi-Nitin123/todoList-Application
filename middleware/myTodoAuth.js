const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.myTodoAuth = async (req, res, next) => {
  let data = req.headers.authorization;
  if (data === undefined) {
    res.send("Please provide a token");
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
    console.log("decoded", decoded);

    req.UserId = decoded.Id;
    console.log(req.Id);

    // myId = req.userId;
    next();
  });
};
