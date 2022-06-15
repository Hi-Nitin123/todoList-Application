import myTodoList from "../Model/myTodoList.js";
import { Op } from "sequelize";
const deleteTodo = (request, response) => {
  myTodoList
    .destroy({
      where: {
        [Op.and]: [{ UserId: request.Id }, { id: request.params.id }],
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

export default deleteTodo;
// exports.deleteRow = async (request, response) => {
//   users.destroy({
//     where: {
//       id: request.body.id,
//     },
//   });
//   response.send("todoList deleted successfully");
// };
