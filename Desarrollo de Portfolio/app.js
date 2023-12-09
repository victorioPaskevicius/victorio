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
  
  