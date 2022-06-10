const myTodoList = require("../controller/myTodoController");

const myTodoAuth = require("../middleware/myTodoAuth");

module.exports = (app) => {
  app.post("/createTodoList", myTodoAuth.myTodoAuth, myTodoList.entertodoList);
};
