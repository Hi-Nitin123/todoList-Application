const auth = require("../middleware/adminCanSeeUsers");

const getUsers = require("../controller/showUsersToAdminC");

module.exports = (app) => {
  app.get("/admin", auth.verifyAdmin, getUsers.adminCanSeeUsers);
};
