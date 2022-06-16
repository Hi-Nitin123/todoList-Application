import todoList from "../Model/myTodoList.js";

import { Op } from "sequelize";

const getTodoById = async (req, res) => {
  console.log(req.params);

  todoList
    .findOne({
      where: { [Op.and]: [{ UserId: req.Id }, { id: req.params.id }] },
    })
    .then((data) => {
      res.status(200).json({ data: data });
    })
    .catch(() => {
      res.status(404).send("todolist not found");
    });
};

export default getTodoById;
