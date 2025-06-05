import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import "./admin.css";
import { useEffect, useState } from "react";

function AdminPanel() {
  const { userName } = useParams();
  const [data, setData] = useState(null);
  const [popupDisplay, setPopupDisplay] = useState("none");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  // Leer tareas
  const readData = () => {
    fetch(`http://localhost:3000/alltasks`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error al obtener tareas:", err));
  };

  useEffect(() => {
    readData();
  }, [userName]);

  // Editar tarea
  const handleEditTask = () => {
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
      .then(() => {
        readData();
        setPopupDisplay("none");
        setEditTaskId(null);
      })
      .catch((err) => console.error("Error al editar tarea:", err));
  };

  return (
    <>
      <div className="container d-flex flex-column gap-5">
        <h2 id="bienvenida">Bienvenido {userName}</h2>
        <h1>Tareas</h1>

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
                onClick={handleEditTask}
                type="submit"
                className="btn btn-success"
              >
                {"Guardar cambios"}
              </button>
            </div>
          </div>
        </div>

        {/* Tareas */}
        {data?.map((task) => (
          <div
            key={task.id}
            className="d-flex flex-column gap-4 cont_task p-4 bg-light"
          >
            <h2 className="nameUser container p-2 shadow">
              Usuario: <span className="text-danger">{task.userName}</span>
            </h2>
            <div className="card-header num_tarea">
              <p>ID: {task.id}</p>
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
            <div className="card-footer text-body-secondary cont_status">
              <p className="statusTask">{task.status}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminPanel;
