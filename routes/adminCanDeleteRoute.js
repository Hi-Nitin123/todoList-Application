const deleteUserAuth = require("../middleware/adminCanDelelteAuth");

const deleteUserController = require("../controller/adminCanDelCont");

module.exports = (app) => {
  app.delete(
    "/deleteUser",
    deleteUserAuth.deleteUserAuth,
    deleteUserController.deleteUser
  );
};
