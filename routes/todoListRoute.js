import entertodoList from "../controller/myTodoController.js";
import verify from "../middleware/authorization.js";

const todoRoute = (app) => {
  app.post("/todoList", verify, entertodoList);
};
export default todoRoute;
