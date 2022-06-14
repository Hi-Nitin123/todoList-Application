const statusAuth = require("../middleware/authorization");

const statusController = require("../controller/statusController");

module.exports = (app) => {
  app.patch(
    "/todoListStatus",
    statusAuth.verify,
    statusController.changeStatus
  );
};
