import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskCreated = () => {
    setRefresh(!refresh); // Forzamos recarga de tareas
  };

  return (
    <div className="App">
      <h1>Gestor de Tareas</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList key={refresh} />
    </div>
  );
}