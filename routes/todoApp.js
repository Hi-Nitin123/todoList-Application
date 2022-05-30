module.exports = (app) => {
  const todoList = require("../controller/taskManager");
  app.post("/todoList", (request, response) => {
    todoList.addTodo(request, response);
  });
};
