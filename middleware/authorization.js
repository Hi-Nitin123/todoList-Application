import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

const verify = async (req, res, next) => {
  let data = req.headers.authorization;
  console.log(data);
  if (data === undefined) {
    res.status(403).json({ message: "Please provide a token" });
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
      return res
        .status(403)
        .json({ message: "You are not authrized to take this action" });
    }
    console.log("decoded", decoded);

    req.Id = decoded.Id;
    console.log(req.Id);

    // myId = req.userId;
    next();
  });
};

export default verify;
