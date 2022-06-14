const deleteUserAuth = require("../middleware/authorization");

const deleteUserController = require("../controller/adminCanDelCont");

module.exports = (app) => {
  app.delete("/user", deleteUserAuth.verify, deleteUserController.deleteUser);
};
