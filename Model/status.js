const dB = require("../Model/db");

const todoRef = require("../Model/todoList");

const { Sequelize, DataTypes } = require("sequelize");
const { response } = require("express");
const sequelize = new Sequelize("postgres::memory:");

const states = sequelize.define("states", {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

states.sync({alter:true})

