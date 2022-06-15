import express from "express";
import * as db from "./Model/db.js";
const app = express();

import bodyParser from "body-parser";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./routes/todoApp")(app);

import signUp from "./routes/signUpRoute.js";
signUp(app);
import loginRoute from "./routes/loginRoute.js";
loginRoute(app);
// import secretPage from "./routes/secretPage";
import todoRoute from "./routes/todoListRoute.js";
todoRoute(app);
import deleteTodoRoute from "./routes/deleteTodo.js";
deleteTodoRoute(app);
import showUsersRoute from "./routes/listOfUsers.js";
showUsersRoute(app);
import showUserProfile from "./routes/showUserProfile.js";
showUserProfile(app);
import showUsersToAdmin from "./routes/showUsersToAdmin.js";
showUsersToAdmin(app);
import adminCanDeleteUser from "./routes/adminCanDeleteRoute.js";
adminCanDeleteUser(app);
import editTodo from "./routes/editTodoRoute.js";
editTodo(app);
import adminCanBlockUser from "./routes/amdinCanBlockUsers.js";
adminCanBlockUser(app);
import ediitProfile from "./routes/editProfileRoute.js";
ediitProfile(app);

import home from "./routes/userCanSeetheirProfile.js";
home(app);

import getMyTodoList from "./routes/todoListById.js";
getMyTodoList(app);

db.sequelize
  .sync()
  .then(() => {
    console.log("Database created");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(8000, function () {
  console.log("This is running on the port 8000!");
});
