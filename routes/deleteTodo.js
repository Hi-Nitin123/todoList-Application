import deleteTodo from "../controller/deleteController.js";

import verify from "../middleware/authorization.js";

const deleteTodoRoute = (app) => {
  app.delete("/todoList/:id", verify, deleteTodo);
};

export default deleteTodoRoute;
