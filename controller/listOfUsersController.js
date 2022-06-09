const getUsers = require("../Model/signUpModel").User;

exports.sendUsers = (request, response) => {
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
