const btnTarea = document.getElementById("tarea");
const textTarea = document.getElementById("form-control");
const accordion = document.getElementById("accordion");

// Funcion para agragar la tarea al acordeon
function agregarTarea() {
    const tareaTexto = textTarea.value.trim();

    if (tareaTexto) {
        const title = prompt('Que titiulo quieres poner a tu tarea?');
        // Crear un nuevo acordeón item
        const nuevaTarea = document.createElement("div");
        nuevaTarea.classList.add("accordion-item");

        const idUnico = `tarea-${Date.now()}`; // Crear un ID único

        nuevaTarea.innerHTML = `
            <h2 class="accordion-header">
                      <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      ${title}
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <p class="accordion-body">
                      ${tareaTexto}
                      </p>
                    </div>
        `;
        // Agregar el contenedor al accordion
        accordion.appendChild(nuevaTarea);

        // Restaurar el input
        textTarea.value = "";
    }
    else{
        alert('Ingresa una tarea');
    }
}
btnTarea.addEventListener('click', agregarTarea);