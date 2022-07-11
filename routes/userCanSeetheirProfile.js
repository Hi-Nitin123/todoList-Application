import myProfile from "../controller/usersCanSeetheirProController.js";

import verify from "../middleware/authorization.js";

const home = (app) => {
  app.get("/user", verify, myProfile);
};
export default home;
