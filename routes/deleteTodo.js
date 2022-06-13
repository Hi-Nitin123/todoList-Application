const deleteRow = require("../controller/deleteController");

const deleteTodoAuth = require("../middleware/authorization");

module.exports = (app) => {
  app.delete("/deleteTodo", deleteTodoAuth.verify, deleteRow.deleteTodo);
};
