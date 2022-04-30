import { STATUSES } from "../../constants";
import "./column.css";

const ColumnTitle = ({ title }) => {
  return (
    <header>
      <h3>{title}</h3>
    </header>
  );
};

//Como podemos diferenciar las tareas de cada columna? en este momento tenemos 3 tareas iguales para las 3 columnas

const Task = (task) => {
  const prevButton =
    task.status != STATUSES[0] ? (
      <button
        className="prev-button"
        onClick={() => task.updateStatus(task.id, 1)}
      >
        {"⬅"}
      </button>
    ) : null;

  const nextButton =
    task.status != STATUSES[2] ? (
      <button
        className="next-button"
        onClick={() => task.updateStatus(task.id, 2)}
      >
        {"➡"}
      </button>
    ) : null;

  return (
    <li key={task.id} className="tasks">
      <h5 className="taskTitle">{task.title}</h5>
      <p>{task.desc}</p>
      {prevButton}
      <button className="delete-task" onClick={() => task.remove(task.id)}>
        Eliminar
      </button>
      {nextButton}
    </li>
  );
};

const Column = ({ title, tasks = [], remove, updateStatus }) => {
  return (
    <section className="column">
      <ColumnTitle title={title} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            remove={remove}
            updateStatus={updateStatus}
            {...task}
          />
        ))}
      </ul>
    </section>
  );
};
export default Column;
