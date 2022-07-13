import express from "express";
import * as db from "./Model/db.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use("/static", express.static(path.join(__dirname, "views")));
app.use("/static", express.static("views"));
app.use(cors(corsOptions));

import signUp from "./routes/signUpRoute.js";
signUp(app);
import loginRoute from "./routes/loginRoute.js";
loginRoute(app);
// // import secretPage from "./routes/secretPage";
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
import deleteMyAccount from "./routes/adminCanDeleteRoute.js";
deleteMyAccount(app);
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

import getUsers from "./routes/getUserByIdRoute.js";
getUsers(app);

import deleteUsers from "./routes/deleteAccByIdRoute.js";
deleteUsers(app);

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
