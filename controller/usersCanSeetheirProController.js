const users = require("../Model/signUpModel").User;

exports.myProfile = (req, res) => {
  users
    .findOne({ where: { Id: req.params.Id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((err) => {
      res.status(404).send("user not found");
    });
};
