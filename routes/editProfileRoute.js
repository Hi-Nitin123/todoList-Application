const editProfile = require("../middleware/authorization");

const editProfileController = require("../controller/editProfileCont");

module.exports = (app) => {
  app.patch("/user", editProfile.verify, editProfileController.profileEdited);
};
