const steps = require("../controller/taskManager");
module.exports = (app) => {
  app.post("/steps", steps.addSteps);
};
