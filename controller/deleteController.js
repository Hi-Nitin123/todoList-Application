const users = require("../Model/myTodoList").myTodoList;

exports.deleteRow = async (request, response) => {
  users.destroy({
    where: {
      id: request.body.id,
    },
  });
  response.send("todoList deleted successfully");
};
