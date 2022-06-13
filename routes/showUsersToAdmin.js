const auth = require("../middleware/authorization");

const getUsers = require("../controller/showUsersToAdminC");

module.exports = (app) => {
  app.get("/admin", auth.verify, getUsers.adminCanSeeUsers);
};
