import verify from "../middleware/authorization.js";

import adminCanSeeUsers from "../controller/showUsersToAdminC.js";

const showUsersToAdmin = (app) => {
  app.get("/admin", verify, adminCanSeeUsers);
};
export default showUsersToAdmin;
