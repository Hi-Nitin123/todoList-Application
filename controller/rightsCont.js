const users = require("../Model/signUpModel").User;

exports.blockUser = (request, response) => {
  users.findOne({ where: { Id: request.Id } }).then((data) => {
    if (data.role === "admin") {
      users.update(
        { rights: request.body.rights },
        { where: { Id: request.params.Id } }
      );
      response.send(`User was ${request.body.rights} successfully`);
    } else {
      response.status(401).json({
        message: "You are not authorized to take this action",
      });
    }
  });
};
