const myProfile = require("../controller/showProfileController");

const myProfileAuth = require("../middleware/authorization");

console.log("myprofile:", myProfile);

module.exports = (app) => {
  app.get(
    "/myTodoList",
    myProfileAuth.verify,
    myProfile.sendProfile,
    (req, res) => {}
  );
};
