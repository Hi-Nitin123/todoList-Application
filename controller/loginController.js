const userLogin = require("../Model/signUpModel");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

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
    if (password_valid) {
      const token = jwt.sign(
        {
          email: foundUser.email,
        },
        "dshgfhjdsgfsuydegfrdsjhfgdhjsfghjdgvbdhjgdhjbgvxjbghdfjgdf"
      );
      res.status(200).json({ token: token });
    } else {
      res.status(400).json({ error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist" });
  }
};
