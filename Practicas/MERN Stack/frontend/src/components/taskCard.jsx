import { useTasks } from "../context/taskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <ul style={{ border: "1px solid", marginBottom: "1rem", padding: "1rem" }}>
      <p>ID: {task.id}</p>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => navigate(`edit/${task.id}`)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </ul>
  );
}

export default TaskCard;
