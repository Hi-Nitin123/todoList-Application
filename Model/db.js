const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "Database_connectivity",
  "postgres",
  "Nitin@123",

  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

try {
  sequelize.sync();
} catch (err) {
  console.log(err);
}
module.exports = { sequelize, DataTypes };
