import TaskCard from "../TaskCard/TaskCard";
import "./Column.css";

export default function Column({ dia, tasks, onStatus, onDelete, onEdit }) {
  return (
    <div className="column">
      <h3>{dia}</h3>

      {tasks
        .filter((t) => t.dia === dia)
        .map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStatus={onStatus}
            onDelete={onDelete}
            onEdit={onEdit} // 👈 AQUI
          />
        ))}
    </div>
  );
}