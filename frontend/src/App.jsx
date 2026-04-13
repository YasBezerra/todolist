import { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm/TaskForm";
import Column from "./components/Column/Column";

const diasSemana = [
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
  "domingo"
];

function App() {
  const [tasks, setTasks] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [dia, setDia] = useState("segunda");

  // 🔥 CARROSSEL
  const [startIndex, setStartIndex] = useState(0);
  const visibleDays = 3;

  // GET tasks
  const fetchTasks = () => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // CREATE task
  const criarTask = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, dia })
    });

    setTitulo("");
    fetchTasks();
  };

  // ✅ CHANGE status (CORRIGIDO)
  const mudarStatus = async (task) => {
    const novoStatus =
      task.status === "pendente"
        ? "em andamento"
        : task.status === "em andamento"
        ? "concluida"
        : "pendente";

    await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo: task.titulo, // 👈 ESSENCIAL
        status: novoStatus
      })
    });

    fetchTasks();
  };

  // DELETE task
  const deletarTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE"
    });

    fetchTasks();
  };

  // ✏️ EDIT task
  const editarTask = async (task, novoTitulo) => {
    await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo: novoTitulo,
        status: task.status
      })
    });

    fetchTasks();
  };

  // 🔥 CONTROLES DO CARROSSEL
  const next = () => {
    if (startIndex + visibleDays < diasSemana.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="app-container">

      {/* TÍTULO */}
      <h1 className="title">To Do List</h1>

      {/* FORM */}
      <TaskForm
        titulo={titulo}
        setTitulo={setTitulo}
        dia={dia}
        setDia={setDia}
        diasSemana={diasSemana}
        onSubmit={criarTask}
      />

      {/* BOARD WRAPPER */}
      <div className="board-wrapper">

        <button className="nav-btn" onClick={prev}>
          ◀
        </button>

        <div className="board">
          {diasSemana
            .slice(startIndex, startIndex + visibleDays)
            .map((d) => (
              <Column
                key={d}
                dia={d}
                tasks={tasks}
                onStatus={mudarStatus}
                onDelete={deletarTask}
                onEdit={editarTask}
              />
            ))}
        </div>

        <button className="nav-btn" onClick={next}>
          ▶
        </button>

      </div>

    </div>
  );
}

export default App;