const users = require("../Model/signUpModel").User;

const joi = require("joi");

exports.profileEdited = async (request, response) => {
  const { firstName, lastName, email } = request.body;
  const usr = {
    firstName,
    lastName,
    email,
  };

  const schema = joi.object({
    firstName: joi.string().min(6).max(30),
    lastName: joi.string().alphanum().min(6).max(30),
    email: joi
      .string()
      .min(10)
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  });
  try {
    const result = await schema.validateAsync(usr);
    users.update(
      {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
      },
      { where: { Id: request.Id } }
    );
    response.send(`Your profile was edited successfully`);
  } catch (err) {
    response.status(400).send(err.details[0].message);
  }
};
