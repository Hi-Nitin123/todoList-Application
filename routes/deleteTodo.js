const deleteRow = require("../controller/deleteController");

const deleteTodoAuth = require("../middleware/authorization");

module.exports = (app) => {
  app.delete("/todoList/:id", deleteTodoAuth.verify, deleteRow.deleteTodo);
};
