const container = document.querySelector('.container')
const user = sessionStorage.getItem('usuario')
const tasksKey = `tasks_${user}`
let tasks = JSON.parse(localStorage.getItem(tasksKey)) || []


const bienvenida = document.getElementById('bienvenida')
bienvenida.textContent = `Bienvenido ${user}`

// Cargar tareas desde JSON sólo si no hay nada en localStorage
if (tasks.length === 0) {
  fetch('../public/tasks.json')
    .then(res => res.json())
    .then(datoJSON => {
      datoJSON.forEach(task => tasks.push(task))
      localStorage.setItem(tasksKey, JSON.stringify(tasks))
      mostrarTasks()
    });
} else {
  mostrarTasks();
}

// Función para renderizar tareas
function mostrarTasks() {
  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.classList.add('cont_task');

    div.innerHTML = `
            <div class="card-header num_tarea">
                <p id="idTask">ID: ${index + 1}</p> 
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
    `;

    container.appendChild(div);

    // Botón Eliminar
    const btnDelete = div.querySelector('.btnDelete')
    btnDelete.addEventListener('click', () => {
      tasks.splice(index, 1);
      localStorage.setItem(tasksKey, JSON.stringify(tasks));
      mostrarTasks();
      location.reload()
    })

    // Botón Editar
    const btnEdit = div.querySelector('.btnEdit')
    btnEdit.addEventListener('click', ()=>{
      const inputTitle = document.getElementById('inputTitle')
      const inputDescription = document.getElementById('inputDescription')

      const popup = document.getElementById('popup')
      popup.style.display = 'flex';

      const btnExit = document.getElementById('btnExit')
      btnExit.onclick = () => {
          inputTitle.value = ''
          inputDescription.value = ''
          popup.style.display = 'none';
      }

      const btnSubmit = document.getElementById('btnSubmit')
      btnSubmit.onclick = () => {
          const taskTitle = div.querySelector('#taskTitle')
          const textTask = div.querySelector('#textTask')

          if (inputTitle.value != '' && inputDescription.value == '') {
              taskTitle.textContent = inputTitle.value
          }else if (inputDescription.value != '' && inputTitle.value == '') {
              textTask.textContent = inputDescription.value
          }else if (inputTitle.value && taskTitle.value != '') {
              taskTitle.textContent = inputTitle.value
              textTask.textContent = inputDescription.value
          }
          const newTask = {
                "titulo": taskTitle.textContent,
                "descripcion": textTask.textContent,
                "estado": 'Pendiente'
            };
          tasks.splice(index, 1, newTask);
          localStorage.setItem(tasksKey, JSON.stringify(tasks));
          popup.style.display = 'none';
          mostrarTasks()
          location.reload()
      }
    });

    })
}

// Agregar tarea nueva
const btnAddTask = document.getElementById('btnAddTask')
btnAddTask.addEventListener('click', () => {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';

  const inputTitle = document.getElementById('inputTitle');
  const inputDescription = document.getElementById('inputDescription');

  const btnSubmit = document.getElementById('btnSubmit');
  btnSubmit.onclick = () => {
    if (inputDescription.value && inputTitle.value == '') {
        alert('Debes rellenar los campos');
      }

    const newTask = {
      titulo: inputTitle.value,
      descripcion: inputDescription.value,
      estado: 'Pendiente'
    };

    tasks.push(newTask);
    localStorage.setItem(tasksKey, JSON.stringify(tasks));
    popup.style.display = 'none';
    mostrarTasks();
    location.reload()
  }
})
