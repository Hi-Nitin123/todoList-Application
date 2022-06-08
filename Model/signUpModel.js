const { sequelize, DataTypes } = require("./db");

const joi = require("joi");
const User = sequelize.define("User", {
  firstName: { allowNull: false, type: DataTypes.STRING },
  lastName: { allowNull: false, type: DataTypes.STRING },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  password: { type: DataTypes.STRING, allowNull: false },

  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
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

module.exports = User;
