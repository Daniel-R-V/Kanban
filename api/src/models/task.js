const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {}
  }

  Task.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      desc: DataTypes.TEXT,
      date: DataTypes.DATE,
      status: DataTypes.TEXT,
      title: DataTypes.TEXT,
    },
    { sequelize, modelName: "Task", tableName: "Task", freezeTableName: true }
  );
  return Task;
};
