const dB = require("../Model/db");

const steps=require("../Model/steps")

const { Sequelize, DataTypes } = require("sequelize");
const { status } = require("express/lib/response");
const sequelize = new Sequelize("postgres::memory:");

const tasks = sequelize.define(
  "tasks",
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
    state: {
    type:DataTypes.STRING,
    references:'states',
    referenceskey:"status"

    },
    stepId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:'steps',
      referenceskey:'id'
    },orderInsteps:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:"steps",
        referenceskey:"order"

    }
    ,
  },
  {}
);
tasks.sync({alter:true})

module.exports=steps