import getTodoById from "../controller/todoListByIdController.js";

import verify from "../middleware/authorization.js";

const getMyTodoList = (app) => {
  app.get("/todoList/:id", verify, getTodoById);
};
export default getMyTodoList;
