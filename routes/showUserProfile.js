const myProfile = require("../controller/showProfileController");

const myProfileAuth = require("../middleware/showProfile.");

console.log("myprofile:", myProfile);

module.exports = (app) => {
  app.get(
    "/home",
    myProfileAuth.verifyToken,
    myProfile.sendProfile,
    (req, res) => {}
  );
};
