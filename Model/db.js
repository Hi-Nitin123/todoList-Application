const { Sequelize, Datatypes } = require("sequelize");

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

module.exports = { sequelize, Datatypes };

// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// db.user = require('./usermodel')(sequelize, Sequelize);
// db.dashboard = require('./dashboard')(sequelize, Sequelize);
// db.comment = require('./comments')(sequelize, Sequelize);
