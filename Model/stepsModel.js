// const { sequelize, DataTypes } = require("./db");

// const User = require("../Model/signUpModel");

// // User.hasMany(mySteps);

// const joi = require("joi");
// exports.mySteps = sequelize.define("mySteps", {
//   serialNo: {
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true,
//     type: DataTypes.INTEGER,
//   },
//   stepName: { allowNull: false, type: DataTypes.STRING },

//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.STRING,
//     enum: ["pending", "done"],
//     defaultValue: "pending",
//   },
//   UserId: {
//     type: DataTypes.INTEGER,
//   },
// });

// sequelize
//   .sync()
//   .then(() => {
//     console.log("working");
//   })
//   .catch((err) => {
//     console.log(`error is ${err}`);
//   });
