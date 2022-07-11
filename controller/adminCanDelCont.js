import users from "../Model/signUpModel.js";

import { Op } from "sequelize";

const deleteMyAccount = async (req, res) => {
  users
    .destroy({ where: { Id: req.Id } })
    .then(() => {
      res.status(200).send("Your account was deleted successfully");
    })
    .catch(() => {
      res.status(404).send("Not found");
    });
};
export default deleteMyAccount;
