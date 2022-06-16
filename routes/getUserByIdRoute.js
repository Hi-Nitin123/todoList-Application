import verify from "../middleware/authorization.js";

import sendUser from "../controller/getUserById.js";

const getUsers = (app) => {
  app.get("/user/:Id", verify, sendUser);
};

export default getUsers;
