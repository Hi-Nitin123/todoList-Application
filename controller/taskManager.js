const addTodo = async (request, response) => {
  const todoList = require("../Model/todoList");

  return await todoList
    .create({
      id: request.body.id,
      name: request.body.name,
      description: request.body.description,
      order: request.body.order,
      createdAt: request.body.createdAt,
      deletedAt: request.body.deletedAt,
    })
    .then((users) => {
      if (users) {
        response.send(users);
      } else {
        response.status(400);
      }
    });
};

module.exports = { addTodo };
