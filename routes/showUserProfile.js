const myProfile = require("../controller/showProfileController");

const myProfileAuth = require("../middleware/authorization");

console.log("myprofile:", myProfile);

module.exports = (app) => {
  app.get(
    "/todoList",
    myProfileAuth.verify,
    myProfile.sendProfile,
    (req, res) => {}
  );
};
