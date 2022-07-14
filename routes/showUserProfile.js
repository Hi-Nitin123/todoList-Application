import sendProfile from "../controller/showProfileController.js";

import verify from "../middleware/authorization.js";

const showUserProfile = (app) => {
  app.get("/myTodoList", verify, sendProfile, (req, res) => {});
};
export default showUserProfile;
