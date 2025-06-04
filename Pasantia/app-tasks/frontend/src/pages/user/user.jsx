import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import "./user.css";
import { useState, useEffect } from "react";

function User() {
  const { userName } = useParams();
  const [popupDisplay, setPopupDisplay] = useState("none");
  const [tasks, setTasks] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  // Leer tareas
  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${userName}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            return fetch(`http://localhost:3000/tasks`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ [userName]: [] }),
            }).then(() => []);
          }
        }
        return res.json();
      })
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error:", err));
  }, [userName]);

  // Función para agregar tarea
  const handleAddTask = () => {
    if (!inputTitle.trim() || !inputDescription.trim()) {
      alert("Los campos no pueden estar vacíos");
      return;
    }

    fetch(`http://localhost:3000/tasks/${userName}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: inputTitle,
        description: inputDescription,
        status: inputStatus,
      }),
    })
      .then((res) => res.json())
      .then((newTask) => {
        setTasks([...tasks, newTask]);
        setPopupDisplay("none");
      })
      .catch((err) => console.error("Error al agregar tarea:", err));
  };
  // Funcion para editar tareas
  const handleEditTask = () => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:3000/tasks/${userName}/${editTaskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: inputTitle,
        description: inputDescription,
        status: inputStatus,
      }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        const updatedTasks = tasks.map((task) =>
          task.id === editTaskId ? updatedTask : task
        );
        setTasks(updatedTasks);
        setPopupDisplay("none");
        setEditMode(false);
        setEditTaskId(null);
      });
  };
  // Funcion para eliminar tareas
  const handleDeleteTask = (taskId) => {
    fetch(`http://localhost:3000/tasks/${userName}/${taskId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      })
      .catch((err) => console.error("Error al eliminar tarea:", err));

    location.reload();
  };

  return (
    <>
      <div className="container d-flex flex-column gap-5">
        <h2 id="bienvenida">Bienvenido {userName}</h2>
        <h1>Tareas</h1>

        <div className="cont_add_task">
          <button
            onClick={() => {
              setEditMode(false);
              setPopupDisplay("flex");
              setInputTitle("");
              setInputDescription("");
              setInputStatus("");
              window.scrollTo(0, 0);
            }}
            className="btn btn-success"
          >
            Nueva tarea
          </button>
        </div>

        {/* Popup */}
        <div
          style={{ display: popupDisplay }}
          className="container p-5 popup"
          id="popup"
        >
          <div className="cont_btn_exit">
            <button
              onClick={() => setPopupDisplay("none")}
              id="btnExit"
              className="btn-close btn-exit"
              aria-label="close"
            ></button>
          </div>
          <div className="popup_inputs">
            <div className="input_title">
              <label>Título de la tarea</label>
              <input
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                type="text"
              />
            </div>
            <div className="input_description">
              <label>Descripción de la tarea</label>
              <input
                value={inputDescription}
                onChange={(e) => setInputDescription(e.target.value)}
                type="text"
              />
            </div>
            <div className="input_description">
              <label>Estado de la tarea</label>
              <input
                value={inputStatus}
                onChange={(e) => setInputStatus(e.target.value)}
                type="text"
              />
            </div>
            <div className="cont_btn_submit">
              <button
                onClick={editMode ? handleEditTask : handleAddTask}
                type="submit"
                className="btn btn-success"
              >
                {editMode ? "Guardar cambios" : "Agregar tarea"}
              </button>
            </div>
          </div>
        </div>

        {/* Tareas */}
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className=" d-flex flex-column gap-4 cont_task p-4 bg-light"
          >
            <div className="card-header num_tarea">
              <p>ID: {index + 1}</p>
            </div>
            <div className="card-body cont-title">
              <h5 className="card-title">{task.title}</h5>
            </div>
            <div className="card-body cont_descripcion">
              <p className="card-text">{task.description}</p>
            </div>
            <div className="card-body cont_btn_edit">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  setPopupDisplay("flex");
                  setEditMode(true);
                  setEditTaskId(task.id);
                  setInputTitle(task.title);
                  setInputDescription(task.description);
                  setInputStatus(task.status);
                  window.scrollTo(0, 0);
                }}
              >
                Editar
              </button>
            </div>
            <div className="card-body cont_btn_delete">
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="btn btn-danger btnDelete"
              >
                Eliminar
              </button>
            </div>
            <div className="card-footer text-body-secondary cont_status">
              <p className="statusTask">{task.status}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default User;