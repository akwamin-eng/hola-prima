/**
 * Hola Prima — Rotating Preloader Phrases
 * Replaces the static "CARGANDO CULTURA..." with a randomly
 * selected Spanglish phrase each page load.
 * Avoids repeating the same phrase back-to-back via sessionStorage.
 */
(function () {
  const phrases = [
    "CARGANDO CULTURA...",
    "PREPARANDO LA VIBRA...",
    "LOADING BIG HOOP ENERGY...",
    "COCINANDO ALGO BUENO...",
    "ARMANDO EL CHISME...",
    "HACIENDO HISTORIA...",
    "EL ARTE ESTÁ LLEGANDO...",
    "PONTE LAS PILAS...",
    "AQUÍ VIENE LO BUENO...",
    "BUILDING DREAMS IN LOS ANGELES...",
    "LA PRIMA ESTÁ LISTA...",
    "TRUST THE PROCESS, PRIMA...",
  ];

  function pickPhrase() {
    const last = sessionStorage.getItem("hp_last_phrase");
    const available = phrases.filter((p) => p !== last);
    const chosen = available[Math.floor(Math.random() * available.length)];
    sessionStorage.setItem("hp_last_phrase", chosen);
    return chosen;
  }

  function applyPhrase() {
    // Target the preloader phrase paragraph
    const el = document.querySelector(".preloader .overflow-hidden p");
    if (el) {
      el.textContent = pickPhrase();
    }
  }

  // Run as early as possible — before the 2s animation-delay fires
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyPhrase);
  } else {
    applyPhrase();
  }
})();
