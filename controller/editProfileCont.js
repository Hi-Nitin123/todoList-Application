import users from "../Model/signUpModel.js";

import joi from "joi";

const profileEdited = async (request, response) => {
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
      { where: { Id: request.params.Id } }
    );
    response.send(`Your profile was edited successfully`);
  } catch (err) {
    response.send(err.details[0].message);
  }
};
export default profileEdited;
