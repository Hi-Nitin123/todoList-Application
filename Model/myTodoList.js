import { sequelize } from "./db.js";
import { DataTypes } from "sequelize";

const myTodoList = sequelize.define("myTodoList", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  todoListName: { allowNull: false, type: DataTypes.STRING },

  status: {
    type: DataTypes.STRING,
    enum: ["pending", "done"],
    defaultValue: "pending",
  },
  UserId: {
    type: DataTypes.INTEGER,
    // allowNull: false,
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

export default myTodoList;
