import users from "../Model/signUpModel.js";

const sendProfile = (req, res) => {
  users.findOne({ where: { Id: req.Id } }).then((data) => {
    if (data.role === "admin") {
      users
        .findOne({ where: { Id: req.params.Id } })
        .then((data) => {
          res.json({ data: data });
        })
        .catch((err) => {
          res.status(404).send("User not found");
        });
    } else {
      res.status(403).send("You are not authorized to take this action");
    }
  });
};

export default sendProfile;
