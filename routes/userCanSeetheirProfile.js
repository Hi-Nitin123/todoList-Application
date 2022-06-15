import myProfile from "../controller/usersCanSeetheirProController.js";

import verify from "../middleware/authorization.js";

const home = (app) => {
  app.get("/user/:Id", verify, myProfile);
};
export default home;
