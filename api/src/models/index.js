require("dotenv").config();
const Sequelize = require("sequelize");
const Task = require("./task");

const config = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
  database: process.env.DATABASE_NAME,
};

const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.Task = Task(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
    db[modelName].sync({ force: true });
  }
});

db.sequelize = sequelize;

db.sequelize = sequelize;

module.exports = db;
