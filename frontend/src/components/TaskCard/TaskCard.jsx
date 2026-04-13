import "./TaskCard.css";

export default function TaskCard({ task, onStatus, onDelete, onEdit }) {

  const handleEdit = () => {
    const novoTitulo = prompt("Novo título:", task.titulo);

    if (!novoTitulo) return;

    onEdit(task, novoTitulo);
  };

  return (
    <div
      className={`card ${task.status}`}
      onClick={() => onStatus(task)}
    >
      <p>{task.titulo}</p>
      <small>{task.status}</small>

      {/* DELETE */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
        className="delete"
      >
        ❌
      </button>

      {/* EDIT */}
      <button
        className="edit"
        onClick={(e) => {
          e.stopPropagation();
          handleEdit();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10L3 14l.146-2.854 10-10zM11.207 2L4 9.207V11h1.793L13 3.793 11.207 2z"/>
        </svg>
      </button>
    </div>
  );
}