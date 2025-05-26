const welcomeAdmin = document.getElementById("welcomeAdmin");
const accordion = document.getElementById("accordion");

const user = sessionStorage.getItem("usuario");
const tasksKey = `tasks_${user}`;

welcomeAdmin.textContent = `Bienvenido ${user}`;

function mostrarTasks() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith("tasks_")) {
      const usuario = key.replace("tasks_", "");
      const tasks = JSON.parse(localStorage.getItem(key)) || [];

      const contUserTasks = document.createElement("div");
      contUserTasks.classList.add(
        "border",
        "m-5",
        "p-5",
        "d-flex",
        "flex-column",
        "gap-5"
      );
      const contTasks = document.createElement("div");

      tasks.forEach((task, index) => {
        const accordionItem = document.createElement("div");
        accordionItem.classList.add(
          "accordion-item",
          "d-flex",
          "flex-column",
          "gap-3"
        );

        contUserTasks.innerHTML = `
            <h2>Tareas de usuario: ${usuario}</h2>
            <div class="cont_add_task">
                <button data-index="${index}" class="btn btn-success" id="btnAddTask">Nueva tarea</button>
            </div>
            
        `;

        accordionItem.innerHTML = `
          <div class="card-header num_tarea">
            <p>ID: ${index + 1}</p> 
          </div>
          <div class="card-body cont_title">
            <h5 id="taskTitle" class="card-title">${task.titulo}</h5>
          </div>
          <div class="card-body cont_descripcion">
            <p id="textTask" class="card-text">${task.descripcion}</p>
          </div>
          <div class="card-body cont_btn_edit">
            <a href="#" data-index="${index}" class="btn btn-primary btnEdit">Edit</a>
          </div>
          <div class="card-body cont_btn_delete">
            <a href="#" data-index="${index}" class="btn btn-outline-danger btnDelete">Delete</a>
          </div>
          <div class="card-footer text-body-secondary cont_status">
            <p class="statusTask">${task.estado}</p>
          </div>
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estado de la tarea
            </button>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item task-estado" data-index="${index}" data-estado="Pendiente">Pendiente</a></li>
              <li><a href="#" class="dropdown-item task-estado" data-index="${index}" data-estado="En proceso">En proceso</a></li>
              <li><a href="#" class="dropdown-item task-estado" data-index="${index}" data-estado="Completada">Completada</a></li>
            </ul>
          </div>
        `;

        contTasks.appendChild(accordionItem);

        // Asignar estados
        const estadoLinks = accordionItem.querySelectorAll(".task-estado");
        estadoLinks.forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const nuevoEstado = link.getAttribute("data-estado");
            const index = parseInt(link.getAttribute("data-index"));

            tasks[index].estado = nuevoEstado;
            localStorage.setItem(key, JSON.stringify(tasks));
            mostrarTasks();
            location.reload();
          });
        });

        // Editar tarea
        const btnEdit = accordionItem.querySelector(".btnEdit");
        btnEdit.addEventListener("click", () => {
          const inputTitle = document.getElementById("inputTitle");
          const inputDescription = document.getElementById("inputDescription");

          const popup = document.getElementById("popup");
          popup.style.display = "flex";

          const btnExit = document.getElementById("btnExit");
          btnExit.onclick = () => {
            inputTitle.value = "";
            inputDescription.value = "";
            popup.style.display = "none";
          };

          const btnSubmit = document.getElementById("btnSubmit");
          btnSubmit.onclick = () => {
            const taskTitle = accordionItem.querySelector("#taskTitle");
            const textTask = accordionItem.querySelector("#textTask");

            if (inputTitle.value != "" && inputDescription.value == "") {
              taskTitle.textContent = inputTitle.value;
            } else if (inputDescription.value != "" && inputTitle.value == "") {
              textTask.textContent = inputDescription.value;
            } else if (inputTitle.value && taskTitle.value != "") {
              taskTitle.textContent = inputTitle.value;
              textTask.textContent = inputDescription.value;
            }
            const newTask = {
              titulo: taskTitle.textContent,
              descripcion: textTask.textContent,
              estado: "Pendiente",
            };
            tasks.splice(index, 1, newTask);
            localStorage.setItem(key, JSON.stringify(tasks));
            popup.style.display = "none";
            mostrarTasks();
            location.reload();
          };
        });

        // Botón Eliminar
        const btnDelete = accordionItem.querySelector(".btnDelete");
        btnDelete.addEventListener("click", () => {
          tasks.splice(index, 1);
          localStorage.setItem(key, JSON.stringify(tasks));
          mostrarTasks();
          location.reload();
        });

        // Agregar tarea nueva
        const btnAddTask = contUserTasks.querySelector("#btnAddTask");
        btnAddTask.addEventListener("click", () => {
          const popup = document.getElementById("popup");
          popup.style.display = "flex";
          window.scroll(0, 0);

          const btnExit = document.getElementById("btnExit");
          btnExit.onclick = () => {
            inputTitle.value = "";
            inputDescription.value = "";
            popup.style.display = "none";
          };

          const inputTitle = document.getElementById("inputTitle");
          const inputDescription = document.getElementById("inputDescription");

          const btnSubmit = document.getElementById("btnSubmit");
          btnSubmit.onclick = () => {
            if (inputDescription.value == "" || inputTitle.value == "") {
              alert("Debes rellenar los campos");
            }

            const newTask = {
              titulo: inputTitle.value,
              descripcion: inputDescription.value,
              estado: "Pendiente",
            };

            tasks.push(newTask);
            localStorage.setItem(key, JSON.stringify(tasks));
            popup.style.display = "none";
            mostrarTasks();
            location.reload();
          };
        });
        contUserTasks.appendChild(contTasks);
        accordion.appendChild(contUserTasks);
      });
    }
  }
}
mostrarTasks();
