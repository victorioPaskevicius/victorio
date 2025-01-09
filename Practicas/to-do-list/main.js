const btnTarea = document.getElementById("tarea");
const textTarea = document.getElementById("form-control");
const accordion = document.getElementById("accordion");

// Funcion para guardar el accordion en el localStorage
function guardarTareas() {
    tareas = []
    document.querySelectorAll(".accordion-item").forEach(tarea => {
        tareas.push(tarea.outerHTML)
    })
    localStorage.setItem("tareas", JSON.stringify(tareas))
}

// Funcion para cargar tareas con localStorage
function cargarTareas() {
        tareasGuardadas = JSON.parse(localStorage.getItem("tareas"))
        tareasGuardadas.forEach(tareaHTML => {
            const nuevaTarea = document.createElement("div");
            nuevaTarea.innerHTML = tareaHTML;
            nuevaTarea.classList.add("accordion-item");
            accordion.appendChild(nuevaTarea.firstElementChild)
        }
    )
}

// Funcion para agragar tareas al accordion
function agregarTarea() {
    const tareaTexto = textTarea.value.trim();

    if (tareaTexto) {
        const title = prompt('¿Qué título quieres poner a tu tarea?').trim();
        if (!title) {
            alert('El título no puede estar vacío.');
            return;
        }

        // Crear un nuevo acordeón item
        const nuevaTarea = document.createElement("div");
        nuevaTarea.classList.add("accordion-item");

        const idUnico = `tarea-${Date.now()}`;

        nuevaTarea.innerHTML = `
            <h2 class="accordion-header row">
                <button class="accordion-button fw-bold col"  type="button" data-bs-toggle="collapse" data-bs-target="#${idUnico}" aria-expanded="true" aria-controls="${idUnico}">
                    ${title}
                </button>
                <button class="col-2 btn btn-danger delete">Eliminar</button>
            </h2>
            <div id="${idUnico}" class="accordion-collapse collapse" data-bs-parent=".accordion">
                <p class="accordion-body d-flex justify-content-between align-items-center">
                    ${tareaTexto}
                </p>
            </div>
        `;
        // Agregar el accordion al contenedor
        accordion.appendChild(nuevaTarea);

        guardarTareas();

        // Restaurar el input
        textTarea.value = "";
    }
    else{
        alert('Ingresa una tarea');
    }
}

// Evento para eliminar una tarea
accordion.addEventListener("click", (e) => {
    btnDelete = e.target
    if (btnDelete.classList.contains('delete')) {
        tareaItem = btnDelete.closest(".accordion-item")
        if (tareaItem) {
            tareaItem.remove()
            guardarTareas();
        }
    }
});

// Evento para agregar tarea al hacer clic en el botón
btnTarea.addEventListener('click', agregarTarea);

cargarTareas()