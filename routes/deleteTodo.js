const deleteRow = require("../controller/deleteController");

const deleteTodoAuth = require("../middleware/deleteTodoAuth");

module.exports = (app) => {
  app.delete(
    "/deleteTodo",
    deleteTodoAuth.verifyUserBeforeDel,
    deleteRow.deleteTodo
  );
};
