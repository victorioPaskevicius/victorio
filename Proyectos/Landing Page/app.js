const tema = document.querySelector('.button__theme');
const header = document.querySelector('header');
const section = document.querySelector('.section');
const fondo = document.querySelector('body');

let boton = true

tema.addEventListener('click', cambiarTema=>{
    if (boton == true) {
        tema.textContent = 'Tema claro';
        fondo.style.backgroundColor = 'rgb(37, 37, 37)';
        boton = false;
    }else{
        tema.textContent = 'Tema oscuro';
        fondo.style.backgroundColor = 'rgb(238, 238, 238';
        boton = true;
    }
});