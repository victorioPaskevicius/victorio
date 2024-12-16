localStorage();

function localStorage() {
    let persona = {
        nombre: 'Juan',
        apellido: 'Robertson',
        edad: 22
    }

    let nombre = "juan"
    localStorage.setItem("nombre", nombre);
}