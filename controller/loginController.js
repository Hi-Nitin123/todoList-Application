const userLogin = require("../Model/signUpModel").User;

console.log("userLogin:", userLogin);

const bcrypt = require("bcrypt");
const { redirect } = require("express/lib/response");

const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.loginUser = async (req, res) => {
  const foundUser = await userLogin.findOne({
    where: { email: req.body.email },
  });
  if (foundUser) {
    console.log(foundUser.password);
    const password_valid = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );
    console.log("Pass", password_valid);
    if (password_valid) {
      console.log(password_valid);
      const token = jwt.sign(
        {
          email: foundUser.email,
        },
        process.env.secret_key
      );

      res.status(200).json({ token: token });
      if (foundUser.role === "user") {
        res.redirect("/createTodoList");
      }
    } else {
      res.status(400).json({ error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist" });
  }
};
