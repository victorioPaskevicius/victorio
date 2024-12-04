// Elementos DOM
const results = document.getElementById("results")
const numbers = document.querySelector("#numbers")
// const nums = document.getElementById("num_buttons")

// Funcion para actualizar el results cada vez que el usuario hace click en un boton
function updateResults(numbers) {
    numbers.addEventListener('click', (e) => {
        alert(e.target)
    })
}
updateResults(numbers)