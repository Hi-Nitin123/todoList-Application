import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "Database_connectivity",
  "postgres",
  "Nitin@123",

  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);
