// Obteniendo elementos del DOM
const elementos = document.querySelectorAll(".elementos")

// Variables para eleccion de computadora
const objetos = ["piedra","papel","tijera"]
// Funcion para obtener eleccion aleatoria de computadora
function computadora(objetos) {
    const eleccionPc = Math.floor(Math.random() *3);
    return objetos[eleccionPc]
}

// Funcion para determinar que elemento elije el usuario
function usuario(elementos) {
    opciones.forEach(elemento => {
        elemento.addEventListener("click", () => {
            const eleccionUsuario = elemento.dataset.choice
            return elementos.eleccionUsuario
        })
    });
}

// Funcion para comparar los datos de las elecciones del usuario con las de la computadora
function ppt(objetos) {
    if (condition) {
        
    }
}