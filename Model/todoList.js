const dB = require("../Model/db");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres::memory:");

const todoList = sequelize.define(
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

      unique: true,
    },
    createdAt: {
      type: Date,
      allowNull: false,
    },
    deletedAt: { type: Date },
  },
  {}
);
todoList.sync({ alter: true });

module.exports = { todoList };
