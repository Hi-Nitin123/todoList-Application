import deleteUser from "../controller/deleteAccById.js";

import verify from "../middleware/authorization.js";

const deleteUsers = (app) => {
  app.delete("/user/:Id", verify, deleteUser);
};

export default deleteUsers;
