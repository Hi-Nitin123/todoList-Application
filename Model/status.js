const dB = require("../Model/db");

const todoRef = require("../Model/todoList");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres::memory:");

const User = sequelize.define("states", {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
