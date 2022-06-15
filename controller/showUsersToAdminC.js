import users from "../Model/signUpModel.js";

const adminCanSeeUsers = (req, res) => {
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
    } else {
      res.status(401).json({ error: "Sorry You are not an amdin" });
    }
  });
};
export default adminCanSeeUsers;
