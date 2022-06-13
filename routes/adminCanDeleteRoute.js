const deleteUserAuth = require("../middleware/authorization");

const deleteUserController = require("../controller/adminCanDelCont");

module.exports = (app) => {
  app.delete(
    "/deleteUser",
    deleteUserAuth.verify,
    deleteUserController.deleteUser
  );
};
