const { Task } = require("../models");

const statuses = ["TO DO", "IN PROGRESS", "DONE"];

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

const destroy = async (req, res) => {
  const id = req.params.taskId;
  try {
    await Task.destroy({ where: { id: id } });
    res.code(204).send({ message: "task deleted" });
  } catch (error) {
    res.code(500).send({ message: error.message });
  }
};

const update = async (req, res) => {
  const id = req.params.taskId;
  const { status } = JSON.parse(req.body);
  console.log({ status, id });
  if (!statuses.includes(status)) {
    res.code(500).send({ message: "status not allowed" });
  }
  try {
    const task = await Task.update({ status }, { where: { id: id } });
    res.code(204).send(task);
  } catch (error) {
    res.code(500).send({ message: error.message });
  }
};

module.exports = { list, create, destroy, update };
