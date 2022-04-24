import { useState, useEffect } from "react";
import Column from "../Column";

import { addTask, getTasks, removeTask } from "../../api";
import { STATUSES } from "../../constants";
import "./layout.css";

const Columns = ({ tasks, remove, updateStatus }) => {
  const statuses = ["TO DO", "IN PROGRESS", "DONE"];
  return statuses.map((status) => (
    <Column
      key={status}
      title={status}
      tasks={tasks.filter((task) => task.status === status)}
      remove={remove}
      updateStatus={updateStatus}
    />
  ));
};

function useLayout() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((response) => {
      setTasks(response);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const title = target.title.value;
    const desc = target.description.value;

    createTask({ title, desc });
  };
  const createTask = async (data) => {
    const task = await addTask(data);
    console.log({ task });
    setTasks([...tasks, task]);
  };

  const remove = async (id) => {
    await removeTask(id);
    setTasks(tasks.filter((task) => id !== task.id));
  };

  const updateStatus = async (id, action) => {
    const newTasks = tasks.map((task) => {
      if (id === task.id) {
        const statusIndex = STATUSES.findIndex((s) => s === task.status);
        if (action === 1 && statusIndex != 0) {
          task.status = statuses[statusIndex - 1];
        } else if (action === 2 && statusIndex < STATUSES.length - 1) {
          task.status = statuses[statusIndex + 1];
        }
      }
      return task;
    });
    setTasks(newTasks);
  };

  return { tasks, handleSubmit, remove, updateStatus };
}

function Layout({ user }) {
  const { tasks, handleSubmit, remove, updateStatus } = useLayout();

  return (
    <div>
      {!user ? (
        <p>You need to be logged to use the app</p>
      ) : (
        <main className="layout">
          <form className="form" onSubmit={handleSubmit}>
            <h3 className="title-form">Create a New Task</h3>
            <input
              className="input"
              name="title"
              type="text"
              placeholder="Title"
            />
            <input
              className="input"
              name="description"
              type="text"
              placeholder="Description"
            />
            <button className="submit" type="submit">
              Add It
            </button>
          </form>
          <Columns tasks={tasks} remove={remove} updateStatus={updateStatus} />
        </main>
      )}
    </div>
  );
}

export default Layout;
