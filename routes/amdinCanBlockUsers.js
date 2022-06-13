const blockUsers = require("../middleware/authorization");

const blockUsersController = require("../controller/rightsCont");

module.exports = (app) => {
  app.patch("/blockUsers", blockUsers.verify, blockUsersController.blockUser);
};
