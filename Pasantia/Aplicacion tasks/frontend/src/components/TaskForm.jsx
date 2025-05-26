import { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ onTaskCreated }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo.trim()) {
      alert("El título es obligatorio");
      return;
    }

    try {
      const nuevaTarea = {
        titulo,
        descripcion,
        estado: "Pendiente",
      };
      await createTask(nuevaTarea);
      setTitulo("");
      setDescripcion("");
      onTaskCreated(); // para refrescar la lista de tareas
    } catch (error) {
      console.error("Error al crear tarea:", error);
      alert("Error al crear la tarea");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear nueva tarea</h2>
      <div>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <button type="submit">Crear tarea</button>
    </form>
  );
}

export default TaskForm;
