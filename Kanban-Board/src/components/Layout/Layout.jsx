import { useState, useEffect } from "react";
import Column from "../Column";
import "./layout.css";

import { addTask, getTasks } from "../../api";

const Columns = ({ tasks }) => {
  const statuses = ["TO DO", "IN PROGRESS", "DONE"];
  return statuses.map((status) => (
    <Column
      key={status}
      title={status}
      tasks={tasks.filter((task) => task.status === status)}
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
  };

  return [tasks, handleSubmit];
}

function Layout({ user }) {
  const [tasks, handleSubmit] = useLayout();

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
          <Columns tasks={tasks} />
        </main>
      )}
    </div>
  );
}

export default Layout;
