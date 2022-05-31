// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("./db");

// const todoList = require("../Model/todoList");

// const steps = async (request, response) => {
//   await sequelize
//     .define("steps", {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       description: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       todoListId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: todoList,
//           key: "id",
//         },
//       },
//       orderInTodoList: {
//         type: DataTypes.INTEGER,
//         references: { model: todoList, key: "order" },
//       },
//     })
//     .then(() => {
//       console.log("table created");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// (async () => {
//   await sequelize
//     .sync({ alter: true })
//     .then(() => {
//       console.log("Table synced");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// })();

// module.exports = steps;
