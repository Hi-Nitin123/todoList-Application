const deleteRow = require("../controller/deleteController");

module.exports = (app) => {
  app.delete("/deleteTodo", deleteRow.deleteRow);
};
