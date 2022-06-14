const getTodoById = require("../controller/todoListByIdController");

const myTodoAuth = require("../middleware/authorization");

module.exports = (app) => {
  app.get("/todoList/:id", myTodoAuth.verify, getTodoById.getTodoById);
};
