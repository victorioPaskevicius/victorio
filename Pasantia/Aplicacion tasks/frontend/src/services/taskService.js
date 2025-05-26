const API_URL = "http://localhost:3001/api/tasks";

// Obtener todas las tareas
export async function fetchTasks() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("No se pudieron obtener las tareas");
  }
  return await response.json();
}

// Crear una nueva tarea
export async function createTask(taskData) {
  const response = await fetch("http://localhost:3001/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error("No se pudo crear la tarea");
  }

  return await response.json();
}
