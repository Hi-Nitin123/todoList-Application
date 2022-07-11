import verify from "../middleware/authorization.js";

import editTodoController from "../controller/editTodoController.js";

const editTodo = (app) => {
  app.patch("/todoList/:id", verify, editTodoController);
};

export default editTodo;
