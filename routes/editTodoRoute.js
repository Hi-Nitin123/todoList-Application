const editTodoAuth = require("../middleware/authorization");

const editTodoCont = require("../controller/editTodoController");

module.exports = (app) => {
  app.patch("/updateTodo", editTodoAuth.verify, editTodoCont.editTodo);
};
