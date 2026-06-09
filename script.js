const viaggi =
  document.querySelectorAll("#offerta-settimana .card").length +
  document.querySelectorAll("#welcome-summer .card").length +
  document.querySelectorAll("#last-minute .card").length;

document.getElementById("contatore-viaggi").textContent =
  "Destinazioni disponibili: " + viaggi;

const bottone = document.getElementById("toggle-last-minute");
const contenuto = document.getElementById("contenuto-last-minute");

bottone.addEventListener("click", () => {
  contenuto.classList.toggle("d-none");

  if (contenuto.classList.contains("d-none")) {
    bottone.textContent = "Mostra Offerte Lampo";
  } else {
    bottone.textContent = "Chiudi Offerte Lampo";
  }
});

const eliminaBtn = document.getElementById("rimuovi-card");

eliminaBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(
    "#offerta-settimana .card, #welcome-summer .card, #last-minute .card"
  );

  cards.forEach((card) => {
    card.classList.toggle("d-none");
  });

  const nascoste = cards[0].classList.contains("d-none");

  eliminaBtn.textContent = nascoste
    ? "Mostra Destinazioni"
    : "Nascondi Destinazioni";
});