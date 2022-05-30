const sequelize = require("../Model/db");

const { Sequelize, DataTypes } = require("sequelize");

const joi = require("joi");
const todoListUsers = sequelize.define("todoListUsers", {
  firstName: { allowNull: false, type: DataTypes.STRING },
  lastName: { allowNull: false, type: DataTypes.STRING },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  password: { type: DataTypes.STRING, allowNull: false },
  confirmPassword: { type: DataTypes.STRING, allowNull: false },
});

(async () => {
  await sequelize.sync({ alter: true });
  // Code here
})();
module.exports = todoListUsers;
