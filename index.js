const express = require("express");

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

app.listen(8000, function () {
  console.log("This is running on the port 8000!");
});
