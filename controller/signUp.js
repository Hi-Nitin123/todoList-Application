import User from "../Model/signUpModel.js";
import joi from "joi";

import bcrypt from "bcrypt";

const userRegister = async (request, response) => {
  const { firstName, lastName, email, password, confirmPassword } =
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
      .min(10)
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })

      .required(),

    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

    confirmPassword: joi.ref("password"),
  });
  try {
    const result = await schema.validateAsync(usr);
    const exist = await User.findOne({
      where: { email: email },
    });

    if (exist === null) {
      const createdUser = bcrypt.hash(password, 10, async (err, hash) => {
        await User.create({
          firstName,
          lastName,
          email,
          password: hash,
        });

        response.status(201).send("user created successfully");
      });
    } else {
      response.send("This user already exists");
    }
  } catch (err) {
    response.send(err.details[0].message);
  }
};

export default userRegister;
