const myTodoList = require("../Model/myTodoList").myTodoList;

exports.sendProfile = async (request, response) => {
  console.log("reqdbfsd:", request.UserId);
  myTodoList
    .findAll({
      where: {
        UserId: request.UserId,
      },
    })
    .then((data) => {
      response.json({ data: data });
    })
    .catch((err) => console.log(err));
};
