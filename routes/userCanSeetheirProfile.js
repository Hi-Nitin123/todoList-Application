const profileAccess = require("../controller/usersCanSeetheirProController");

const profileAuth = require("../middleware/authorization");

module.exports = (app) => {
  app.get("/user", profileAuth.verify, profileAccess.myProfile);
};
