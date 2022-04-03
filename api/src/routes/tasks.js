const { tasksController } = require("../controllers");
const tasksRoutes = async (app) => {
  app.get("/", {}, tasksController.list);
};

module.exports = tasksRoutes;
