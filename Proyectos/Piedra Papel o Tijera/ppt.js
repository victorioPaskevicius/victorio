// Obteniendo elementos del DOM
const elementos = document.querySelectorAll(".elementos")

// Variables para eleccion de computadora
const objetos = ["piedra","papel","tijera"]

// Funcion para obtener eleccion aleatoria de computadora
function eleccionComputadora(objetos) {
    const eleccionPc = Math.floor(Math.random() *3);
    return objetos[eleccionPc]
}

// Funcion para determinar que elemento elije el usuario
function jugarPiedraPapelTijera(elementos) {
    elementos.forEach(elemento => {
        elemento.addEventListener("click", () => {
            // Eleccion usuario
            const usuario = elemento.dataset.choice
            // Eleccion pc
            const eleccionComputadora = computadora();
            // Devolver resultado
            const resultado = ppt(usuario,eleccionComputadora)
        })
    });
}

// Funcion para comparar los datos de las elecciones del usuario con las de la computadora
function ppt(usuario,eleccionComputadora) {
    if (eleccionComputadora === usuario) {
        alert("Empate!")
    }
    if (usuario === piedra & eleccionComputadora === tijera ||
        usuario === tijera & eleccionComputadora === papel ||
        usuario === papel & eleccionComputadora === piedra) {
        alert("Felicidades, has ganado!")
    } 
    else {
        alert("Que mal, perdiste :(")
    }
}