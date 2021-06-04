const vCard = document.querySelectorAll("#cardContainer .card");
const btnV = document.querySelector("#vGrid");
const btnH = document.querySelector("#hGrid");
const btnL = document.querySelector("#lGrid");

function vDisplay() {
  for (const card of vCard) {
    if (
      card.classList.contains("card-l") ||
      card.classList.contains("card-h")
    ) {
      card.classList.remove("card-l", "card-h");
      btnV.disabled = true;
      btnH.disabled = false;
      btnL.disabled = false;
    }
  }
}
btnV.onclick = vDisplay;

function hDisplay() {
  for (const card of vCard) {
    if (card.classList.contains("card-l")) {
      card.classList.remove("card-l");
    }
    card.classList.add("card-h");
    btnH.disabled = true;
    btnV.disabled = false;
    btnL.disabled = false;
  }
}
btnH.onclick = hDisplay;

function lDisplay() {
  for (const card of vCard) {
    if (card.classList.contains("card-h")) {
      card.classList.remove("card-h");
    }
    card.classList.add("card-l");
    btnL.disabled = true;
    btnV.disabled = false;
    btnH.disabled = false;
  }
}
btnL.onclick = lDisplay;
