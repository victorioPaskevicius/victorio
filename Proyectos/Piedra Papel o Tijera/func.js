// Obtener elementos del DOM
const opciones = document.querySelectorAll('.elementos');
const eleccionJugadorImg = document.getElementById('eleccionJugador');
const eleccionComputadoraImg = document.getElementById('eleccionComputadora');
const resultado = document.getElementById('resultado');

// Opciones disponibles
const opcionesJuego = ['piedra', 'papel', 'tijeras'];

// Función para obtener una elección aleatoria de la computadora
function eleccionComputadora() {
    const aleatoria = Math.floor(Math.random() * 3); // Genera un número entre 0 y 2
    return opcionesJuego[aleatoria];
}

// Función para determinar el ganador
function determinarGanador(eleccionJugador, eleccionComputadora) {
    if (eleccionJugador === eleccionComputadora) {
        return "¡Es un empate!";
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
    ) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!";
    }
}

// Función para manejar el clic en una opción
opciones.forEach(opcion => {
    opcion.addEventListener('click', (e) => {
        // Limpiar el mensaje de resultado antes de cada nueva elección
        resultado.textContent = '¡Haz tu elección!';
        
        // Obtener la elección del jugador
        const eleccionJugador = e.target.id;
        
        // Actualizar la imagen del jugador
        eleccionJugadorImg.src = `emojis/${eleccionJugador}.png`;
        
        // Obtener la elección de la computadora
        const eleccionCompu = eleccionComputadora();
        
        // Actualizar la imagen de la computadora
        eleccionComputadoraImg.src = `emojis/${eleccionCompu}.png`;
        
        // Determinar el ganador
        const mensajeResultado = determinarGanador(eleccionJugador, eleccionCompu);
        
        // Mostrar el resultado
        resultado.textContent = mensajeResultado;
    });
});
