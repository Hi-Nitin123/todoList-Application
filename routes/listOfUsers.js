const showUsers = require("../controller/listOfUsersController");

module.exports = (app) => {
  app.get("/showUsers", showUsers.sendUsers);
};
