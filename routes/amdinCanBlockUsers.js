import verify from "../middleware/authorization.js";

import blockUser from "../controller/rightsCont.js";

const adminCanBlockUser = (app) => {
  app.patch("/admin/:Id", verify, blockUser);
};
export default adminCanBlockUser;
