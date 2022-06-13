const deleteUserAuth = require("../middleware/authorization");

const deleteUserController = require("../controller/adminCanDelCont");

module.exports = (app) => {
  app.delete("/admin", deleteUserAuth.verify, deleteUserController.deleteUser);
};
