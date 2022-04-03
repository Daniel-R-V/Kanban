import { useState, useEffect } from "react";
import Column from "../Column";
import "./layout.css";

import { getTasks } from "./api";

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
    const date = new Date().toISOString("DD/MM/YYYY");
    const newTask = {
      id: tasks.length + 1,
      status: "TO DO",
      title,
      desc,
      date,
    };
    setTasks([...tasks, newTask]);
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
          <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="Add a task title" />
            <input
              name="description"
              type="text"
              placeholder="Add a task description"
            />
            <button type="submit">Add task</button>
          </form>
          <Columns tasks={tasks} />
        </main>
      )}
    </div>
  );
}

export default Layout;
