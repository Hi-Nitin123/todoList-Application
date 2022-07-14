const todoList = require("../Model/myTodoList").myTodoList;

exports.changeStatus = (req, res) => {
  const { Op } = require("sequelize");

  todoList
    .update(
      { status: req.body.status },
      { where: { [Op.and]: [{ UserId: req.Id }, { id: req.body.id }] } }
    )
    .then((data) => {
      res.status(200).send(`Your status was changed to ${req.body.status}`);
    })
    .catch((err) => {
      res.status(401).send("you are not authorized to take this action");
    });
};
