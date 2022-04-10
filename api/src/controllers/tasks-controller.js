const { Task } = require("../models");

const list = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.code(200).send(tasks);
  } catch (error) {
    res.code(500).send({ message: error.message });
  }
};

const create = async (req, res) => {
  const { desc, title } = req.body;
  const date = new Date().toISOString();
  const status = "TO DO";
  try {
    const task = await Task.create({ desc, date, title, status });
    if (task) {
      res.code(201).send(task);
    } else {
      res.code(401).send({ message: "error creating task" });
    }
  } catch (error) {
    res.code(500).send({ message: error.message });
  }
};

module.exports = { list, create };
