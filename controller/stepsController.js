const mySteps = require("../Model/stepsModel").mySteps;

const myTodoList = require("../Model/myTodoList").myTodoList;

myTodoList.hasMany(mySteps);

const joi = require("joi");

console.log(mySteps);

exports.enterSteps = async (request, response) => {
  const stepsItem = {
    stepName: request.body.stepName,
    description: request.body.description,
    todoListId: request.body.todoListId,
  };

  const schema = joi.object({
    stepName: joi.string().min(3).max(50).required(),
    description: joi.string().required(),
    todoListId: joi.number().required(),
  });
  try {
    const result = await schema.validateAsync(stepsItem);

    created_user = await mySteps.create(stepsItem);

    response.status(201).json(created_user);
  } catch (err) {
    response.send(err.details[0].message);
    console.log(err);
  }
};
