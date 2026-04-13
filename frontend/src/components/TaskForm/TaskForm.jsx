import "./TaskForm.css";

export default function TaskForm({
  titulo,
  setTitulo,
  dia,
  setDia,
  diasSemana,
  onSubmit
}) {
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nova tarefa..."
      />

      <select value={dia} onChange={(e) => setDia(e.target.value)}>
        {diasSemana.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <button>Adicionar</button>
    </form>
  );
}