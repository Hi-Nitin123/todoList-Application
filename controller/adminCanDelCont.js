const users = require("../Model/signUpModel").User;

const { request } = require("express");
const { response } = require("express");

exports.deleteUser = async (req, res) => {
  const { Op } = require("sequelize");
  users.findOne({ where: { Id: req.Id } }).then((data) => {
    if (data.role === "admin") {
      users
        .findAll({ where: { role: "user" } })
        .then((showUsers) => {
          showUsers.Id = req.body.Id;
          users.destroy({ where: { Id: showUsers.Id } });
        })
        .then((msg) => {
          res.send("User deleted successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.send("You are not authorized to delete this user");
    }
  });
};
