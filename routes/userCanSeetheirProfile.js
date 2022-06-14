const profileAccess = require("../controller/usersCanSeetheirProController");

const profileAuth = require("../middleware/authorization");

module.exports = (app) => {
  app.get("/user/:Id", profileAuth.verify, profileAccess.myProfile);
};
