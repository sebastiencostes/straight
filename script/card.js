// const allCards = document.querySelectorAll(".card-gallery .card");
// const galleries = document.querySelectorAll(".card-gallery");
// const allBtnV = document.querySelectorAll(".v-grid");
// const allBtnH = document.querySelectorAll(".h-grid");
// const allBtnL = document.querySelectorAll(".l-grid");
const cards = document.querySelectorAll("#cardGallery .card");
const btnV = document.querySelector("#vGrid");
const btnH = document.querySelector("#hGrid");
const btnL = document.querySelector("#lGrid");
const btnOpen = document.querySelectorAll(".open");
const cardBody = document.querySelectorAll(".card-body");
const btnClose = document.querySelectorAll(".close");





card = () => {
  /*
  ACTION CARD
  */
  //fetch and set all data-attr on appropriate elements
  for (let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].setAttribute("data-card", i);
  }
  for (let i = 0; i < cardBody.length; i++) {
    cardBody[i].setAttribute("data-card", i);
  }
  for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].setAttribute("data-card", i);
  }

  //show
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
  //hide
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

  /*
  GALLERY CARD
  */
  //fetch and set all data-attr on appropriate elements
  // for(let i = 0; i < allBtnV.length; i++) {
  //   allBtnV[i].setAttribute('data-card-gallery', i);
  // }
  // for(let i = 0; i < allBtnH.length; i++) {
  //   allBtnH[i].setAttribute('data-card-gallery', i);
  // }
  // for(let i = 0; i < allBtnL.length; i++) {
  //   allBtnL[i].setAttribute('data-card-gallery', i);
  // }
  // for(let i = 0; i < galleries.length; i++) {
  //   galleries[i].setAttribute('data-card-gallery', i);
  // }

  // for(let btn of allBtnV) {
  //   btn.setAttribute('id', )
  //   btn.addEventListener("click", () => {
  //     for(let gallery of galleries) {
  //       for(let card of allCards) {
  //         let isEqual = gallery.getAttribute("data-card-gallery") === btn.getAttribute('data-card-gallery') &&  gallery.getAttribute("data-card-gallery") === card.getAttribute('data-card-gallery');
  //         isEqual ? card.classList.remove("card-l", "card-h") : null
  //       }
  //     }
  //   });
  // }

  // for(let btn of allBtnH) {
  //   btn.addEventListener("click", () => {
  //     for(let gallery of galleries) {
  //       for(let card of allCards) {
  //         let isEqual = gallery.getAttribute("data-card-gallery") === btn.getAttribute('data-card-gallery') &&  gallery.getAttribute("data-card-gallery") === card.getAttribute('data-card-gallery');
  //         isEqual ?  (card.classList.add("card-h"), card.classList.remove("card-l")) : null
  //       }
  //     }
  //   });
  // }

  // for(let btn of allBtnL) {
  //   btn.addEventListener("click", () => {
  //     for(let gallery of galleries) {
  //       for(let card of allCards) {
  //         let isEqual = gallery.getAttribute("data-card-gallery") === btn.getAttribute('data-card-gallery') &&  gallery.getAttribute("data-card-gallery") === card.getAttribute('data-card-gallery');
  //         isEqual ?  (card.classList.add("card-l"), card.classList.remove("card-h")) : null
  //       }
  //     }
  //   });
  // }


  


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
card();


 