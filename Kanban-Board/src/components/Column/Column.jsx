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
  return (
    <li key={task.id} className="tasks">
      <h5 className="taskTitle">{task.title}</h5>
      <p>{task.desc}</p>
    </li>
  );
};

const Column = ({ title, tasks = [] }) => {
  return (
    <section className="column">
      <ColumnTitle title={title} />
      <ul>{tasks.map(Task)}</ul>
    </section>
  );
};
export default Column;
