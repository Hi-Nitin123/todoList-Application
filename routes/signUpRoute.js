const register = require("../controller/signUp");
module.exports = (app) => {
  app.post("/signUp", register.userRegister);
};
