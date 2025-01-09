// Obteniendo elementos del DOM
const piedra = document.getElementById("piedra")
const papel = document.getElementById("papel")
const tijera = document.getElementById("tijera")
const title = document.getElementById("resultado")
const imgUser = document.getElementById("eleccionJugador")
const imgPc = document.getElementById("eleccionComputadora")

// Poniendo los elementos del DOM en un array para hacer la eleccion de la pc
elementos = ["piedra","papel","tijera"]

// Funcion para poner las imagenes de la pc

// Funcion para hacer que la computadora elija un elemento del array aleatorio
function eleccionPc(elementos) {
    const eleccionPc = elementos[Math.floor(Math.random() * elementos.length)]
    if (eleccionPc === "piedra") {
        imgPc.src = "images/piedra.png"
    }
    else if (eleccionPc === "papel") {
        imgPc.src = "images/papel.png"
    }
    else {
        imgPc.src = "images/tijeras.png"
    }
    return eleccionPc;
}

// Funcion para comparar la elecion de la computadora con el usuario y determinar un ganador
function comparar(pc,usuario) {
    if (usuario === "piedra" && pc === "tijera" ||
        usuario === "papel" && pc === "piedra" ||
        usuario === "tijera" && pc === "papel"
    ) {
        title.innerHTML = "Felicidades, has ganado ✔"
    }
    else if (usuario === "piedra" && pc === "papel" ||
            usuario === "papel" && pc === "tijera" ||
            usuario === "tijera" && pc === "piedra") {
            title.innerHTML = "Vaya, has perdido ❌"
    }
    else {
        title.innerHTML = "Empate!"
    }
}

// En esta funcion se espera que el usuario haga click en un elemento, luego se ejecuta la eleccion de la computadora 
// y finalmente se comparan los valores
function user(piedra, papel, tijera) {
    piedra.addEventListener("click", () => {
        imgUser.src = "images/piedra.png"
        const pc = eleccionPc(elementos)
        const usuario = "piedra"
        comparar(pc,usuario)
    });
    papel.addEventListener("click", () => {
        imgUser.src = "images/papel.png"
        const pc = eleccionPc(elementos)
        const usuario = "papel"
        comparar(pc,usuario)
    });
    tijera.addEventListener("click", () => {
        imgUser.src = "images/tijeras.png"
        const pc = eleccionPc(elementos)
        const usuario = "tijera"
        comparar(pc,usuario)
    });
}
user(piedra, papel, tijera)