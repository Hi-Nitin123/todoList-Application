const register = require("../controller/signUp.js");
module.exports = (app) => {
  app.post("/signUp", register);
};
