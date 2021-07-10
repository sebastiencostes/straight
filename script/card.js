window.addEventListener("load", () => {
  const btnOpen = document.querySelectorAll(".card-open");
  const cardBody = document.querySelectorAll(".card .card-body");
  const btnClose = document.querySelectorAll(".card-close");
  const cardGalleries = document.querySelectorAll(".card-gallery");
  const btnV = document.querySelectorAll(".card-gallery-v");
  const btnH = document.querySelectorAll(".card-gallery-h");
  const btnL = document.querySelectorAll(".card-gallery-l");

  card = () => {
    /*
  ACTION CARD
  */
    //fetch and set all data-attr on appropriate elements for action card
    for (let i = 0; i < btnOpen.length; i++) {
      btnOpen[i].setAttribute("data-card", i);
    }
    for (let i = 0; i < cardBody.length; i++) {
      cardBody[i].setAttribute("data-card", i);
    }
    for (let i = 0; i < btnClose.length; i++) {
      btnClose[i].setAttribute("data-card", i);
    }
    //set data attr for card gallery
    for (let i = 0; i < cardGalleries.length; i++) {
      cardGalleries[i].setAttribute("data-card-gallery", i);
      btnV[i].setAttribute("data-card-gallery", i);
      btnH[i].setAttribute("data-card-gallery", i);
      btnL[i].setAttribute("data-card-gallery", i);
    }

    //show body card
    for (let button of btnOpen) {
      button.addEventListener("click", () => {
        for (let content of cardBody) {
          let isEqual =
            content.getAttribute("data-card") ===
            button.getAttribute("data-card");
          isEqual
            ? (content.classList.remove("d-none"),
              content.classList.add("d-flex"))
            : null;
        }
      });
    }
    //hide body card
    for (let button of btnClose) {
      button.addEventListener("click", () => {
        for (let content of cardBody) {
          let isEqual =
            content.getAttribute("data-card") ===
            button.getAttribute("data-card");
          isEqual
            ? (content.classList.add("d-none"),
              content.classList.remove("d-flex"))
            : null;
        }
      });
    }

    //Card Gallery
    cardgallery = (
      currentBtn,
      curentGallery,
      currentCards,
      cardFromOrientationA,
      cardFromOrientationB,
      cardToOrientation
    ) => {
      if (currentBtn === curentGallery) {
        for (const card of currentCards) {
          if (
            card.classList.contains(cardFromOrientationA) ||
            card.classList.contains(cardFromOrientationB)
          ) {
            card.classList.remove(cardFromOrientationA);
            card.classList.remove(cardFromOrientationB);
          }
          card.classList.add(cardToOrientation);
        }
      }
    };
    //call card gallery to V orientation
    for (let btn of btnV) {
      btn.addEventListener("click", (e) => {
        //get current trigger
        let currentBtn = e.currentTarget.getAttribute("data-card-gallery");
        //get current gallery
        let currentGallery =
          e.currentTarget.parentNode.parentNode.getAttribute(
            "data-card-gallery"
          );
        //get cards from the targeted gallery
        let currentCards = e.currentTarget.parentNode.parentNode.children;
        //get orientaion
        let cardFromOrientationA = "card-h";
        let cardFromOrientationB = "card-l";

        cardgallery(
          currentBtn,
          currentGallery,
          currentCards,
          cardFromOrientationA,
          cardFromOrientationB,
          "card-v"
        );
      });
    }

    //call gard Gallery to H oriention
    for (let btn of btnH) {
      btn.addEventListener("click", (e) => {
        //get current trigger
        let currentBtn = e.currentTarget.getAttribute("data-card-gallery");
        //get current gallery
        let currentGallery =
          e.currentTarget.parentNode.parentNode.getAttribute(
            "data-card-gallery"
          );
        //get cards from the targeted gallery
        let currentCards = e.currentTarget.parentNode.parentNode.children;
        //get orientaion
        let cardFromOrientationA = "card-l";
        let cardFromOrientationB = "card-v";
        cardgallery(
          currentBtn,
          currentGallery,
          currentCards,
          cardFromOrientationA,
          cardFromOrientationB,
          "card-h"
        );
      });
    }

    //call card gallery to L orientation
    for (let btn of btnL) {
      btn.addEventListener("click", (e) => {
        //get current trigger
        let currentBtn = e.currentTarget.getAttribute("data-card-gallery");
        //get current gallery
        let currentGallery =
          e.currentTarget.parentNode.parentNode.getAttribute(
            "data-card-gallery"
          );
        //get cards from the targeted gallery
        let currentCards = e.currentTarget.parentNode.parentNode.children;
        //get orientaion
        let cardFromOrientationA = "card-h";
        let cardFromOrientationB = "card-v";
        cardgallery(
          currentBtn,
          currentGallery,
          currentCards,
          cardFromOrientationA,
          cardFromOrientationB,
          "card-l"
        );
      });
    }
  };
  card();
});
