import myTodoList from "../Model/myTodoList.js";

import { Op } from "sequelize";

const editTodoController = (request, response) => {
  myTodoList
    .findOne({
      where: {
        [Op.and]: [{ UserId: request.Id }, { id: request.params.id }],
      },
    })
    .then((data) => {
      myTodoList.update(
        {
          todoListName: request.body.todoListName,
          description: request.body.description,
          status: request.body.status,
        },
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

export default editTodoController;
