document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var body = document.querySelector("body");
      var wave = this.document.querySelector('.wave__header');
      var scrollPosition = window.scrollY;
  
      if (scrollPosition > 0) {
        body.classList.add("scroll");
        wave.classList.add("wave__scroll");

      } else {
        body.classList.remove("scroll");
        wave.classList.remove("wave__scroll");
      }
    });
  });

  const containerSobreMi = document.querySelectorAll('.container__sobreMi');

  containerSobreMi.forEach(container => {
      container.addEventListener('click', function () {
          const textSobreMi = this.querySelector('p');
          if (textSobreMi) {
              if (textSobreMi.style.display === 'block') {
                  textSobreMi.style.display = 'none';
              } else {
                  textSobreMi.style.display = 'block';
              }
          }
      });
  });

  const name = document.getElementById('nombre');
            const surname = document.getElementById('apellido');
            const email = document.getElementById('email');
            const msj = document.getElementById('mensaje');
            const form = document.querySelector('.form__contact');
            const warnings = document.querySelector('.warnings');

            form.addEventListener('submit', e => {
                e.preventDefault();

                warnings.innerHTML = ''; // Limpiar mensajes anteriores

                if (name.value.length < 6) {
                    mostrarAdvertencia('Nombre muy corto');
                }

                if (!validarApellido(surname.value)) {
                    mostrarAdvertencia('Apellido no válido');
                }

                if (!validarEmail(email.value)) {
                    mostrarAdvertencia('Email no válido');
                }

                if (msj.value.length < 60) {
                    mostrarAdvertencia('El mensaje debe tener al menos 60 caracteres');
                }

                // Puedes agregar más validaciones según sea necesario

                // Si no hay advertencias, enviar el formulario
                if (warnings.innerHTML === '') {
                    // Simplemente imprime un mensaje en la consola para demostración
                    console.log("Formulario enviado con éxito.");
                }
            });

            function mostrarAdvertencia(mensaje) {
                const warningElement = document.createElement('p');
                warningElement.textContent = mensaje;
                warnings.appendChild(warningElement);
            }

            function validarApellido(apellido) {
                // Expresión regular para validar el apellido
                return /^\w+$/.test(apellido);
            }

            function validarEmail(correo) {
                // Expresión regular para validar el email
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
            }