const { tasksController } = require("../controllers");
const tasksRoutes = async (app) => {
  app.get("/", {}, tasksController.list);
  app.post("/", {}, tasksController.create);
};

module.exports = tasksRoutes;
