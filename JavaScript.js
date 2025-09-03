
/* RECUADRO DE MEDIDAS SOLO EN EL GIF/VIDEO */
const azulejoUnico = document.querySelector(".azulejo-unico");
const cursorRecuadro = document.getElementById("cursorRecuadro");

if (azulejoUnico && cursorRecuadro) {
  azulejoUnico.addEventListener("mouseenter", () => {
    cursorRecuadro.style.display = "block";
  });

  azulejoUnico.addEventListener("mouseleave", () => {
    cursorRecuadro.style.display = "none";
  });

  azulejoUnico.addEventListener("mousemove", e => {
    cursorRecuadro.style.left = (e.pageX - 110) + "px";
    cursorRecuadro.style.top  = (e.pageY - 130) + "px";
  });
}


// Menú hamburguesa
const menuBtn = document.querySelector(".menu-movil");
const menuDesplegable = document.querySelector(".menu-desplegable");

if (menuBtn && menuDesplegable) {
  menuBtn.addEventListener("click", () => {
    menuDesplegable.classList.toggle("activo");
  });

  // Opcional: cerrar al hacer clic en un enlace
  menuDesplegable.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuDesplegable.classList.remove("activo");
    });
  });
}




