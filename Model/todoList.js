const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");

const todoLists = sequelize.define(
  "todoLists",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: { type: DataTypes.DATE },
  },
  {}
);
(async () => {
  await sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Database Created");
    })
    .catch((err) => {
      console.log(err);
    });
  // Code here
})();

module.exports = todoLists
