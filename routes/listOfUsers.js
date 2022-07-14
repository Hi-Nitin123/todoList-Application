import sendUsers from "../controller/listOfUsersController.js";

const showUsersRoute = (app) => {
  app.get("/showUsers", sendUsers);
};

export default showUsersRoute;
