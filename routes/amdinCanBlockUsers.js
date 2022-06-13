const blockUsers = require("../middleware/adminCanSeeUsers");

const blockUsersController = require("../controller/rightsCont");

console.log("ndsbahfdsfhkjdghkj");
module.exports = (app) => {
  app.patch(
    "/blockUsers",
    blockUsers.verifyAdmin,
    blockUsersController.blockUser
  );
};
