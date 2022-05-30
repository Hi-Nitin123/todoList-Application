module.exports = (app) => {
  const signUp = require("../controller/signUp");
  app.post("/signUp", signUp);
};
