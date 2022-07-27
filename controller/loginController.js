import userLogin from "../Model/signUpModel.js";

console.log("userLogin:", userLogin);

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const loginUser = async (req, res) => {
  const foundUser = await userLogin.findOne({
    where: { email: req.body.email },
  });
  if (foundUser) {
    console.log(foundUser.password);
    const password_valid = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );

    if (password_valid) {
      if (foundUser.rights === "Unblock") {
        console.log("hello");
        res.status(200).json({
          message: "You are blocked",
          access: foundUser.rights,
          myRole: foundUser.role,
        });
      } else {
        const token = jwt.sign(
          {
            Id: foundUser.Id,
          },
          process.env.secret_key,
          { expiresIn: "4h" }
        );

        res.status(200).json({
          token: token,
          access: foundUser.rights,
          myRole: foundUser.role,
        });
      }
    } else {
      console.log("Hello", error);
      res.status(400).json({ error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist" });
  }
};

export default loginUser;
