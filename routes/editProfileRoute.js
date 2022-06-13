const editProfile = require("../middleware/authorization");

const editProfileController = require("../controller/editProfileCont");

module.exports = (app) => {
  app.patch(
    "/editProfile",
    editProfile.verify,
    editProfileController.profileEdited
  );
};
