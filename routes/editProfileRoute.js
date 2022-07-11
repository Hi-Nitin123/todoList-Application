import verify from "../middleware/authorization.js";
import profileEdited from "../controller/editProfileCont.js";

const editProfile = (app) => {
  app.patch("/user/:Id", verify, profileEdited);
};

export default editProfile;
