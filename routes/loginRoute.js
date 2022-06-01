const login = require("../controller/loginController");

const auth = require("../controller/auth");
module.exports = (app) => {
  console.log(login);
  app.post("/login", auth.auth, login.loginUser);
};
