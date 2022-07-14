import getUsers from "../Model/signUpModel.js";

const sendUsers = (request, response) => {
  request.role = "user";
  getUsers
    .findAll({
      where: {
        role: request.role,
      },
    })
    .then((data) => {
      response.json({ data: data });
    });
};

export default sendUsers;
