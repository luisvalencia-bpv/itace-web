/* ==========================================================================
   SCRIPT PARA GESTIÓN DE MULTIMEDIA (Pausa automática al reproducir otro)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todas las etiquetas de video y audio en la página
  const mediaElements = document.querySelectorAll("video, audio");

  mediaElements.forEach(media => {
    // Cada vez que el usuario presiona "play" en un elemento multimedia
    media.addEventListener("play", function() {
      mediaElements.forEach(otherMedia => {
        // Si el elemento actual NO es el que se acaba de reproducir, lo pausamos
        if (otherMedia !== media) {
          otherMedia.pause();
        }
      });
    });
  });
});

// =========================================================
// FUNCIÓN PARA CAMBIAR ENTRE MODO CLARO Y MODO OSCURO
// =========================================================
function toggleModoOscuro(e) {
  if (e) e.preventDefault();
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  const btn = document.getElementById('modo-btn');
  if (btn) {
    if (body.classList.contains('dark-mode')) {
      btn.innerHTML = '☀️'; // Cambia a sol en modo oscuro
    } else {
      btn.innerHTML = '🌙'; // Cambia a luna en modo claro
    }
  }
}