const Fastify = require("fastify");

const start = async () => {
  const fastify = Fastify({ logger: true });
  await fastify.register(require("fastify-cors"), {
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
  });
  await fastify.register(require("./routes", { prefix: "api" }));
  return fastify;
};
start().then((app) => {
  app.listen(3000);
});
