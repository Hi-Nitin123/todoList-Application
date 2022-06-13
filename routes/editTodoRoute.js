const editTodoAuth = require("../middleware/authorization");

const editTodoCont = require("../controller/editTodoController");

module.exports = (app) => {
  app.patch("/todoList", editTodoAuth.verify, editTodoCont.editTodo);
};
