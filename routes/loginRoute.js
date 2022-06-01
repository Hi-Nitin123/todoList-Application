const login = require("../controller/loginController");
module.exports = (app) => {
  console.log(login);
  app.post("/login", login.loginUser);
};
