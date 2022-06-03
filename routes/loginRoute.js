const login = require("../controller/loginController");

const auth = require("../middleware/auth");

module.exports = (app) => {
  console.log(login);
  app.post("/login", login.loginUser);
};
