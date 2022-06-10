const editTodoAuth = require("../middleware/editTodoAuth");

const editTodoCont = require("../controller/editTodoController");

module.exports = (app) => {
  app.patch("/updateTodo", editTodoAuth.editTodoAuth, editTodoCont.editTodo);
};
