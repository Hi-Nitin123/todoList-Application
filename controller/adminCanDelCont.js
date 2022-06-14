const users = require("../Model/signUpModel").User;

exports.deleteUser = async (req, res) => {
  console.log(req.Id);
  const { Op } = require("sequelize");
  users.findOne({ where: { Id: req.Id } }).then((data) => {
    console.log("data:", data);
    if (data.role === "admin") {
      users
        .destroy({
          where: { [Op.and]: [{ Id: req.body.Id }, { role: "user" }] },
        })
        .then((data) => {
          res.status(200).send("user deleted successfully");
        })
        .catch((err) => {
          res.send("user was not deleted");
        });
    } else {
      users
        .destroy({
          where: { Id: req.Id },
        })
        .then((err) => {
          res.status(200).send("Your account deleted successfully");
        })
        .catch((err) => {
          res.send("yopu account was not deleted");
        });
    }
  });
};
