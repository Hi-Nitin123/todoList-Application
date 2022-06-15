import User from "../Model/signUpModel.js";

import myTodoList from "../Model/myTodoList.js";

import joi from "joi";

User.hasMany(myTodoList);

const entertodoList = async (request, response) => {
  const todoItem = {
    todoListName: request.body.todoListName,
    description: request.body.description,
    UserId: request.Id,
  };

  const schema = joi.object({
    todoListName: joi.string().min(3).max(50).required(),
    description: joi.string().required(),
    UserId: joi.number().required(),
  });
  try {
    const result = await schema.validateAsync(todoItem);

    const created_user = await myTodoList.create(todoItem).catch((err) => {
      console.log(err);
    });
    console.log(created_user);

    response.status(201).json(created_user);
  } catch (err) {
    response.json(err.details[0].message);
    console.log("error:", err);
    console.log(err);
  }
};
export default entertodoList;
