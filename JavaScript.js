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
