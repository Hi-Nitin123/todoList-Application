const res = require("express/lib/response");

const myTodoList = require("../Model/myTodoList").myTodoList;

exports.deleteTodo = (request, response) => {
  const { Op } = require("sequelize");
  myTodoList
    .destroy({
      where: {
        [Op.and]: [{ UserId: request.Id }, { id: request.body.id }],
      },
    })
    .then((msg) => {
      response.send("todoList deleted");
    })
    .catch((err) => {
      response
        .status(401)
        .json({ message: "You are not authorized to delete this todo list" });
    });
};

// exports.deleteRow = async (request, response) => {
//   users.destroy({
//     where: {
//       id: request.body.id,
//     },
//   });
//   response.send("todoList deleted successfully");
// };
