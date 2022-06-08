const myTodoList = require("../Model/myTodoList").myTodoList;

const joi = require("joi");

const User = require("../Model/signUpModel").User;

User.hasMany(myTodoList);

exports.entertodoList = async (request, response) => {
  const todoItem = {
    todoListName: request.body.todoListName,
    description: request.body.description,
  };

  const schema = joi.object({
    todoListName: joi.string().min(3).max(50).required(),
    description: joi.string().required(),
  });
  try {
    const result = await schema.validateAsync(todoItem);

    created_user = await myTodoList.create(todoItem);

    response.status(201).json(created_user);
  } catch (err) {
    response.send(err.details[0].message);
    console.log(err);
  }
};
