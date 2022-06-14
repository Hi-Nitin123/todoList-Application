const editProfile = require("../middleware/authorization");

const editProfileController = require("../controller/editProfileCont");

module.exports = (app) => {
  app.patch(
    "/user/:Id",
    editProfile.verify,
    editProfileController.profileEdited
  );
};
