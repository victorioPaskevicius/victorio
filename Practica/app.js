document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var body = document.querySelector("body");
      var scrollPosition = window.scrollY;
  
      if (scrollPosition > 0) {
        body.classList.add("scroll");
      } else {
        body.classList.remove("scroll");
      }
    });
  });