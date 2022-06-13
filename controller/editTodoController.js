const myTodoList = require("../Model/myTodoList").myTodoList;

exports.editTodo = (request, response) => {
  const { Op } = require("sequelize");
  myTodoList
    .findOne({
      where: {
        [Op.and]: [{ UserId: request.UserId }, { id: request.body.id }],
      },
    })
    .then((data) => {
      console.log("data:", request.UserId, request.body.id);
      myTodoList.update(
        { todoListName: request.body.todoListName },
        { where: { id: data.id } }
      );
      response.send("todoListEdited successfully");
    })
    .catch((err) => {
      response
        .status(401)
        .json({ message: "You are not authorized to edit this todo list" });
    });
};
