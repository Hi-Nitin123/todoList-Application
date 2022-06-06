const { sequelize, DataTypes } = require("./db");

const joi = require("joi");
exports.mySteps = sequelize.define("mySteps", {
  serialNo: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  stepName: { allowNull: false, type: DataTypes.STRING },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  todoListId: {
    type: DataTypes.INTEGER,
  },
});

try {
  sequelize.sync({ alter: true });
} catch (err) {
  console.log(console(err.message));
}
