const myTodoList = require("../controller/myTodoController");

const myTodoAuth = require("../middleware/authorization");

module.exports = (app) => {
  app.post("/todoList", myTodoAuth.verify, myTodoList.entertodoList);
};
