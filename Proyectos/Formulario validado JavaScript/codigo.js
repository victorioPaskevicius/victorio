const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const form = document.getElementById('contact-form');
const parrafo = document.getElementById ('warnings');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let warnings = ''
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false
    parrafo.innerHTML = ''
    if(nombre.value.length < 3){
        warnings +=`El nombre no es valido <br>`
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if (pass.value.length < 8) {
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = 'Enviado correctamente'
        nombre.value = ''
        email.value = ''
        pass.value = ''
    }
})