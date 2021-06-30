window.addEventListener("load", () => {
  const btnOpen = document.querySelectorAll(".card .open");
  const cardBody = document.querySelectorAll(".card .card-body");
  const btnClose = document.querySelectorAll(".card .close");

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
  };
  card();
});
