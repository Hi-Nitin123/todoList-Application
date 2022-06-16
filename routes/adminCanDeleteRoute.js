import verify from "../middleware/authorization.js";

import deleteUser from "../controller/adminCanDelCont.js";

const deleteMyAccount = (app) => {
  app.delete("/user", verify, deleteUser);
};
export default deleteMyAccount;
