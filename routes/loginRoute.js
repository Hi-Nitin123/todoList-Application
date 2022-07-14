import loginUser from "../controller/loginController.js";

const loginRoute = (app) => {
  app.post("/login", loginUser);
};

export default loginRoute;
