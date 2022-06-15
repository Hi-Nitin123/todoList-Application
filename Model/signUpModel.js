import { sequelize } from "./db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstName: { allowNull: false, type: DataTypes.STRING },
  lastName: { allowNull: false, type: DataTypes.STRING },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: { type: DataTypes.STRING, allowNull: false },

  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
  rights: {
    type: DataTypes.STRING,
    defaultValue: "unblocked",
    enum: ["blocked", "unblocked"],
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

export default User;
