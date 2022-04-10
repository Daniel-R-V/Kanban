const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static asociate(models) {}
  }

  Task.init(
    {
      desc: DataTypes.TEXT,
      date: DataTypes.DATE,
      status: DataTypes.TEXT,
      title: DataTypes.TEXT,
    },
    { sequelize, modelName: "Task" }
  );
  return Task;
};
