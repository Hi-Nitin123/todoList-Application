const myTodoList = require("../Model/myTodoList").myTodoList;

const { op } = require("sequelize");

// const users = require("../Model/signUpModel").User;

exports.deleteTodo = (request, response) => {
  const { Op } = require("sequelize");
  myTodoList
    .destroy({
      where: {
        [Op.and]: [{ UserId: request.UserId }, { id: request.body.id }],
      },
    })
    .then((msg) => {
      response.send("todoList deleted");
    })
    .catch((err) => {
      response.send(err.details[0].message);
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
