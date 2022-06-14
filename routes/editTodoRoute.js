const editTodoAuth = require("../middleware/authorization");

const editTodoCont = require("../controller/editTodoController");

module.exports = (app) => {
  app.patch("/todoList/:id", editTodoAuth.verify, editTodoCont.editTodo);
};
