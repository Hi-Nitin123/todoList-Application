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
  confirmPassword: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
    enum: ["Admin", "user"],
  },
});

console.log(User === sequelize.models.User);

try {
  sequelize.sync({ alter: true });
} catch (err) {
  console.log(console(err.message));
}
module.exports = User;
