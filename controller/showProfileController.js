import myTodoList from "../Model/myTodoList.js";

const sendProfile = async (request, response) => {
  myTodoList
    .findAll({
      where: {
        UserId: request.Id,
      },
    })
    .then((data) => {
      response.json({ data: data });
    })
    .catch((err) => console.log(err));
};

export default sendProfile;
