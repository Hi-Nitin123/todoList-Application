import verify from "../middleware/authorization.js";

import deleteUser from "../controller/adminCanDelCont.js";

const adminCanDeleteUser = (app) => {
  app.delete("/user/:Id", verify, deleteUser);
};
export default adminCanDeleteUser;
