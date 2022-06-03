const myTodoList = require("../controller/myTodoController");

module.exports = (app) => {
  app.post("/createTodoList", myTodoList.entertodoList);
};
