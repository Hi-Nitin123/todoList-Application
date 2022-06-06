// const todoLists = require("../Model/todoList");

// const steps = require("../Model/steps");

// const addTodo = async (request, response) => {
//   const todos = {
//     name: request.body.name,
//     description: request.body.description,
//     order: parseInt(request.body.order),
//     createdAt: request.body.createdAt,
//     deletedAt: request.body.deletedAt,
//   };
//   await todoLists

//     .create(todos)
//     .then((getTodo) => {
//       if (getTodo) {
//         console.log(getTodo);
//       } else {
//         response.status(400);
//       }
//     })
//     .catch((err) => {
//       response.send(err);
//     });
// };
// const addSteps = async (request, response) => {
//   const step = {
//     name: request.body.name,
//     description: request.body.description,
//     todoListId: parseInt(request.body.todoListId),
//     orderInTodoList: parseInt(request.body.orderInTodoList),
//   };
//   await steps

//     .create(step)
//     .then((getPromise) => {
//       if (getPromise) {
//         console.log(getPromise);
//       } else {
//         response.status(400);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// module.exports = { addTodo, addSteps };
