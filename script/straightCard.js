window.addEventListener("load", () => {
    const cards = document.querySelectorAll("#cardGalleryExample .card");
    const btnV = document.querySelector("#vGrid");
    const btnH = document.querySelector("#hGrid");
    const btnL = document.querySelector("#lGrid");  
    straightCard = () => {
      //V display
      btnV.addEventListener("click", () => {
        for (const card of cards) {
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
      });
      //H display
      btnH.addEventListener("click", () => {
        for (const card of cards) {
          if (card.classList.contains("card-l")) {
            card.classList.remove("card-l");
          }
          card.classList.add("card-h");
          btnH.disabled = true;
          btnV.disabled = false;
          btnL.disabled = false;
        }
      });
      //L display
      btnL.addEventListener("click", () => {
        for (const card of cards) {
          if (card.classList.contains("card-h")) {
            card.classList.remove("card-h");
          }
          card.classList.add("card-l");
          btnL.disabled = true;
          btnV.disabled = false;
          btnH.disabled = false;
        }
      });
    };
    straightCard();
  });
  