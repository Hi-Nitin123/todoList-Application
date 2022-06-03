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

try {
  sequelize.sync({ alter: true });
} catch (err) {
  console.log(console(err.message));
}
