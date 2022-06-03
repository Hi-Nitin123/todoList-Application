const auth = require("../middleware/auth");

module.exports = (app) => {
  app.get("/secret", auth.auth, (req, res) => {
    res.send("Welcome to secret page");
  });
};
