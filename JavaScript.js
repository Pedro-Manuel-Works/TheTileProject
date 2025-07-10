document.addEventListener('DOMContentLoaded', () => {
  const botonMenu = document.querySelector('.menu-movil');
  const menuDesplegable = document.getElementById('menuMovil');

  if (botonMenu && menuDesplegable) {
    botonMenu.addEventListener('click', () => {
      menuDesplegable.classList.toggle('activo');
    });
  } else {
    console.error("Botón o menú no encontrados");
  }
});

