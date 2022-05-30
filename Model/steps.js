const dB = require("../Model/db");

const todoRef = require("../Model/todoList");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres::memory:");

const User = sequelize.define(
  "steps",
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
    todoListId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: todoRef,
      referenceskey: "id",
    },
    orderInTodoList: {
      type: DataTypes.INTEGER,
      references: todoRef,
      referenceskey: "order",
    },
  },
  {}
);
