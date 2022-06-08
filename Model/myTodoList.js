const { sequelize, DataTypes } = require("./db");

const User = require("./signUpModel");
const joi = require("joi");
const { mySteps } = require("./stepsModel");
const myTodoList = sequelize.define("myTodoList", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  todoListName: { allowNull: false, type: DataTypes.STRING },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    enum: ["pending", "done"],
    defaultValue: "pending",
  },
  UserId: {
    type: DataTypes.INTEGER,
    // allowNull: false,
  },
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("working");
  })
  .catch((err) => {
    console.log(`error is ${err}`);
  });

module.exports = { myTodoList };
