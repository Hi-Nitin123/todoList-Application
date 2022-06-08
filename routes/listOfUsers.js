const showUsers = require("../controller/listOfUsersController");

console.log("err:", showUsers);
module.exports = (app) => {
  app.get("/showUsers", showUsers.sendUsers);
};
