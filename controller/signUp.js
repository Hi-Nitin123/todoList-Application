const User = require("../Model/signUpModel.js");

console.log(User);

const joi = require("joi");

const bcrypt = require("bcrypt");

const userRegister = async (request, response) => {
  const { firstName, lastName, email, password, confirmPassword, role } =
    request.body;
  const usr = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  };

  const schema = joi.object({
    firstName: joi.string().min(3).max(30).required(),
    lastName: joi.string().alphanum().min(3).max(30).required(),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),

    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

    confirmPassword: joi.ref("password"),
  });
  try {
    const result = await schema.validateAsync(usr);
  } catch (err) {
    response.send(err.details[0].message);
  }
  const exist = await User.findOne({
    where: { email: email },
  });

  if (exist === null) {
    const hashedPassword = bcrypt.hash(password, 10, async (err, hash) => {
      console.log("hash:", hashedPassword);
      created_user = await User.create({
        firstName,
        lastName,
        email,
        password: hash,
      });

      response.status(201).json(created_user);
    });
  } else {
    response.send("This user already exists");
  }
};

module.exports = userRegister;
