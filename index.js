const express = require("express");

const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/todoApp.js")(app);

app.set("view engine", "ejs");

app.listen(8000, function () {
  console.log("This is running on the port 8000!");
});
