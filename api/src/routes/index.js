const apiRoutes = async (app) => {
  app.register(require("./tasks"), { prefix: "/tasks" });
  app.get("/", async (request, response) => {
    return { message: "Api Running" };
  });
};

module.exports = apiRoutes;
