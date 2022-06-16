import users from "../Model/signUpModel.js";

import { Op } from "sequelize";

const deleteUser = async (req, res) => {
  console.log(req.Id);

  users.findOne({ where: { Id: req.Id } }).then((data) => {
    console.log("data:", data);
    if (data.role === "admin") {
      users
        .destroy({
          where: {
            [Op.and]: [{ Id: req.params.Id }, { role: "user" }],
          },
        })
        .then((data) => {
          res.status(200).send("user was deleted successfully");
          console.log(req.params.Id);
        })
        .catch((err) => {
          console.log("error:", err);
          res.send("An admin cannot delete himself");
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
export default deleteUser;
