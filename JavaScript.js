document.addEventListener('DOMContentLoaded', () => {
  console.log("JS cargado correctamente");

  const botonMenu = document.querySelector('.menu-movil');
  const menuDesplegable = document.getElementById('menuMovil');

  if (botonMenu && menuDesplegable) {
    botonMenu.addEventListener('click', () => {
      menuDesplegable.classList.toggle('activo');
      console.log("Menú desplegable toggled");
    });
  } else {
    console.error("Botón o menú no encontrados");
  }
});


/*RECUADRO DE MEDIDAS*/

const cuadros = document.querySelectorAll(".cuadro-imagen");
const cursorRecuadro = document.getElementById("cursorRecuadro");

cuadros.forEach(cuadro => {
  cuadro.addEventListener("mouseenter", () => {
    cursorRecuadro.style.display = "block";
  });

  cuadro.addEventListener("mouseleave", () => {
    cursorRecuadro.style.display = "none";
  });

  cuadro.addEventListener("mousemove", e => {
    cursorRecuadro.style.left = (e.pageX + 10) + "px"; // pequeño offset
    cursorRecuadro.style.top = (e.pageY + 10) + "px";
  });
});





