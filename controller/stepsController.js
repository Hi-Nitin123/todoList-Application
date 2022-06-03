const mySteps = require("../Model/stepsModel").mySteps;

const joi = require("joi");

console.log(mySteps);

exports.enterSteps = async (request, response) => {
  const stepItem = {
    stepName: request.body.stepName,
    description: request.body.description,
    todoListId: parseInt(request.body.todoListId),
  };

  const schema = joi.object({
    stepName: joi.string().min(3).max(50).required(),
    description: joi.string().min(10).max(100).required(),
    todoListId: joi.number().required(),
  });
  try {
    const result = await schema.validateAsync(stepItem);

    created_user = await myTodoList.create(stepItem);

    response.status(201).json(created_user);
  } catch (err) {
    response.send(err.details[0].message);
    console.log(err);
  }
};
