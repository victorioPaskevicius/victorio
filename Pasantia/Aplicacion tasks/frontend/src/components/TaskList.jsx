import { useEffect, useState } from "react";
import { fetchTasks } from "../services/taskService";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks()
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Error al cargar las tareas");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas disponibles</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <strong>{task.titulo}</strong>: {task.descripcion} ({task.estado})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
