const users = require("../Model/signUpModel").User;

exports.adminCanSeeUsers = (req, res) => {
  console.log(req.Id);
  users.findOne({ where: { Id: req.Id } }).then((data) => {
    if (data.role === "admin") {
      users
        .findAll({ where: { role: "user" } })
        .then((getUsers) => {
          res.json({ getUsers: getUsers });
        })
        .catch((err) => {
          res.send(err);
        });
    }
  });
};
