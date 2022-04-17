const { tasksController } = require("../controllers");
const tasksRoutes = async (app) => {
  app.get("/", {}, tasksController.list);
  app.post("/", {}, tasksController.create);
  app.put("/:taskId", {}, tasksController.update);
  app.delete("/:taskId", {}, tasksController.destroy);
};

module.exports = tasksRoutes;
