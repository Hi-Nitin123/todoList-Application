const express = require("express");
const db = require("./Model/db");
const app = express();

const auth = require("./middleware/auth");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./routes/todoApp")(app);
// require("./routes/stepsRoute")(app);

require("./routes/signUpRoute")(app);
require("./routes/loginRoute")(app);
require("./routes/secretPage")(app);
require("./routes/todoListRoute")(app);
require("./routes/stepsRoute")(app);

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
