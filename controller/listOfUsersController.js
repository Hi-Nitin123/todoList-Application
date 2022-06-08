const getUsers = require("../Model/signUpModel").User;

exports.sendUsers = (request, response) => {
  getUsers
    .findAll({
      where: {
        role: request.body.role,
      },
    })
    .then((data) => {
      response.json({ data: data });
    });
};
