const todoListUsers = require("../Model/signUpModel");

const joi = require("joi");

const bcrypt = require("bcrypt");

const userRegister = async (request, response) => {
  const password = request.body.pswd;
  const confirmPassword = request.body.password;

  const usr = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
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
  const exist = await todoListUsers.findOne({
    where: { email: request.body.email },
  });
  if (exist === null) {
    (usr.password = await bcrypt.hash(password, 10)),
      (usr.confirmPassword = await bcrypt.hash(confirmPassword, 10)),
      (created_user = await todoListUsers.create(usr));

    response.status(201).json(created_user);
  } else {
    response.send("This user already exists");
  }
};

module.exports = userRegister;
