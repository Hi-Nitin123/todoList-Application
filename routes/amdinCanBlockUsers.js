const blockUsers = require("../middleware/authorization");

const blockUsersController = require("../controller/rightsCont");

module.exports = (app) => {
  app.patch("/admin", blockUsers.verify, blockUsersController.blockUser);
};
