import users from "../Model/signUpModel.js";

const myProfile = (req, res) => {
  users
    .findOne({ where: { Id: req.Id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((err) => {
      res.status(404).send("User not found");
    });
};

export default myProfile;
