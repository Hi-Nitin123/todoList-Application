const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const User = await sequelize.define(
    "User",
    {
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      password: { type: DataTypes.STRING, allowNull: false },
      confirmPassword: { type: DataTypes.STRING, allowNull: false },
      role: {
        type: String,
        default: "superAdmin",
        enum: ["superAdmin", "user", "admin"],
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
};
