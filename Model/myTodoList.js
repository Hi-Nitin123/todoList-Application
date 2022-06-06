const { sequelize, DataTypes } = require("./db");

const joi = require("joi");
exports.myTodoList = sequelize.define("myTodoList", {
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
});

sequelize
  .sync()
  .then(() => {
    console.log("working");
  })
  .catch((err) => {
    console.log(`error is ${err}`);
  });
