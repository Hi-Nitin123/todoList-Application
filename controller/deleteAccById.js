import users from "../Model/signUpModel.js";

const deleteUser = (req, res) => {
  users.findOne({ where: { Id: req.Id } }).then((data) => {
    if (data.role === "admin") {
      users
        .destroy({ where: { Id: req.params.Id } })
        .then(() => {
          res.status(200).send("User was deleted successfully");
        })
        .catch(() => {
          res.status(404).send("User not found");
        });
    } else {
      res.status(403).send("You are not authorized to take this action");
    }
  });
};

export default deleteUser;
