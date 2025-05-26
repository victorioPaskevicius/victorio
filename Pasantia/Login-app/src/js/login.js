// Usa un addEventListener para saber cuando se le hace click al boton de enviar
document.getElementById('btn_submit').addEventListener('click', async function (e) {
  e.preventDefault()
    // Aqui se guardan algunos elementos del DOM
    const nombre = document.getElementById('nombre').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const mensaje = document.getElementById('mensaje');
  
    // Funcion que en caso de que los campos esten vacios, devulve un texto explicando el error
    if (nombre === '' || contrasena === '') {
      mensaje.textContent = 'Completa todos los campos';
      mensaje.style.color = 'red';
      return;
    }
    
    // Aqui usa "try" para que en caso de que halla un error, este se guarde en catch
    try {
      // Busca el archivo "JSON" y lo guarda en "response"
      const response = await fetch("../public/login.json");
      // Abre el archivo "JSON" para saber los datos
      const usuarios = await response.json();

      // Funcion para saber si el nombre y contraseña ingresado en la pagina es igual al de la base de datos (se guarda en "usuarioValido")
      const usuarioValido = usuarios.find(u => u.usuario === nombre && u.contrasena === contrasena);
  
      // Condicional que en caso de que "usuarioValido" sea TRUE dé el mensaje de bienvenida, sino de el mensaje de error
      if (usuarioValido.usuario == 'pablo') {
        sessionStorage.setItem('usuario', nombre);
        window.location.href = '../../CRUD-app/src/admin.html'
      }else if (usuarioValido) {
        sessionStorage.setItem('usuario', nombre);
        window.location.href = '../../CRUD-app/src/userCRUD.html'
      } else {
        mensaje.textContent = 'Usuario o contraseña incorrectos';
        mensaje.style.color = 'red';
      }
      // Si no se pudo encontrar el archivo JSON o no se pudo abrir, manda el mensaje de error
    } catch (error) {
      mensaje.textContent = 'Error al cargar la base de datos';
      mensaje.style.color = 'red';
    }
  }
);