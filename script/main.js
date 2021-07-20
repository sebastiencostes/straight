const S = {
  nav() {
    const navElement = document.querySelector(".nav");
    const menu = document.querySelector(".nav-menu");
    const menuItems = document.querySelectorAll(".nav-menu-item");
    const openBtn = document.querySelector(".nav .open");
    const closeBtn = document.querySelector(".nav .close");

    //toggle menu from nav list
    navList = (isOpen) => {
      isOpen
        ? (closeBtn.classList.add("d-block"),
          closeBtn.classList.remove("d-none"),
          menu.classList.remove("d-none"),
          menu.classList.add("d-block", "nav-menu"))
        : (openBtn.classList.add("d-block"),
          openBtn.classList.remove("d-none"),
          menu.classList.add("d-none"),
          menu.classList.remove(
            "nav-pad-menu",
            "d-grid",
            "g-col-s-3",
            "g-col-l-4",
            "g-col-xl-5",
            "g-col-xxl-6",
            "nav-menu",
            "d-block"
          ));
      isOpen
        ? [
            navElement.classList.add("bg-nav"),
            navElement.classList.add("b-shadow"),
            menu.classList.add("bg-nav"),
            menu.classList.add("b-shadow"),
          ]
        : [
            navElement.classList.remove("bg-nav", "b-shadow"),
            menu.classList.remove("bg-nav", "b-shadow"),
          ];
    };

    //close nav list when clicking outside
    navListOutside = (isNav) => {
      isNav
        ? null
        : (menu.classList.remove("d-block"),
          menu.classList.add("d-none"),
          closeBtn.classList.add("d-none"),
          closeBtn.classList.remove("d-block"),
          openBtn.classList.remove("d-none"),
          openBtn.classList.add("d-block"),
          navElement.classList.remove("bg-nav", "b-shadow"),
          menu.classList.remove("bg-nav", "b-shadow"));
    };

    //close nav list when clicking on items
    navListItem = (isOpen) => {
      menu.classList.remove("d-block");
      menu.classList.add("d-none");
      closeBtn.classList.add("d-none");
      closeBtn.classList.remove("d-block");
      openBtn.classList.remove("d-none");
      openBtn.classList.add("d-block");
      isOpen
        ? [
            navElement.classList.add("bg-nav", "b-shadow"),
            menu.classList.add("bg-nav", "b-shadow"),
          ]
        : [
            navElement.classList.remove("bg-nav", "b-shadow"),
            menu.classList.remove("bg-nav", "b-shadow"),
          ];
    };

    //Call navList() to open hide/show menu
    openBtn.addEventListener("click", (e) => {
      let open = true;
      e.currentTarget.classList.add("d-none");
      e.currentTarget.classList.toggle("d-block");
      navList(open);
    });

    //Call navList() to close hide/show menu
    closeBtn.addEventListener("click", (e) => {
      let open = false;
      e.currentTarget.classList.add("d-none");
      e.currentTarget.classList.remove("d-block");
      navList(open);
    });

    //call navListOutside
    document.addEventListener("click", function (event) {
      let isNav = navElement.contains(event.target);
      navListOutside(isNav);
    });

    //hide menu when clicking on li
    for (let item of menuItems) {
      item.addEventListener("click", () => {
        let open = false;
        navListItem(open);
      });
    }
  },
  navPad() {
    const navPadElement = document.querySelector(".nav-pad");
    const navPadHeader = document.querySelector(".nav-pad .nav-header");
    const menuPad = document.querySelector(".nav-pad-menu");
    const menuPadItems = document.querySelectorAll(".nav-pad .nav-menu-item");
    const openPadBtn = document.querySelector(".nav-pad .open-pad");
    const closePadBtn = document.querySelector(".nav-pad .close-pad");

    //toggle menu from nav pad
    togglePadMenu = (isOpen) => {
      isOpen
        ? (closePadBtn.classList.add("d-block"),
          closePadBtn.classList.remove("d-none"),
          menuPad.classList.remove("d-none"),
          navPadHeader.classList.add("bg-nav", "b-shadow"),
          menuPad.classList.add(
            "nav-pad-menu",
            "d-grid",
            "g-col-s-3",
            "g-col-l-4",
            "g-col-xl-5",
            "g-col-xxl-6"
          ))
        : (openPadBtn.classList.add("d-block"),
          openPadBtn.classList.remove("d-none"),
          menuPad.classList.add("d-none"),
          navPadHeader.classList.remove("bg-nav", "b-shadow"),
          menuPad.classList.remove(
            "nav-pad-menu",
            "d-grid",
            "g-col-s-3",
            "g-col-l-4",
            "g-col-xl-5",
            "g-col-xxl-6"
          ));
    };
    //close nav pad when clicking outside
    navPadOutside = (isNavpad) => {
      isNavpad
        ? null
        : (menuPad.classList.remove(
            "nav-pad-menu",
            "d-grid",
            "g-col-s-3",
            "g-col-l-4",
            "g-col-xl-5",
            "g-col-xxl-6"
          ),
          menuPad.classList.add("d-none"),
          closePadBtn.classList.add("d-none"),
          closePadBtn.classList.remove("d-block"),
          openPadBtn.classList.remove("d-none"),
          openPadBtn.classList.add("d-block"),
          navPadHeader.classList.remove("bg-nav", "b-shadow"));
    };
    //close nav pad when clicking on items
    navPaditem = (isOpen) => {
      menuPad.classList.remove(
        "nav-pad-menu",
        "d-grid",
        "g-col-s-3",
        "g-col-l-4",
        "g-col-xl-5",
        "g-col-xxl-6"
      );
      menuPad.classList.add("d-none");
      closePadBtn.classList.add("d-none");
      closePadBtn.classList.remove("d-block");
      openPadBtn.classList.remove("d-none");
      openPadBtn.classList.add("d-block");
      isOpen
        ? navPadHeader.classList.add("bg-nav", "b-shadow")
        : navPadHeader.classList.remove("bg-nav", "b-shadow");
    };
    //Call togglePadMenu() to switch hide/show menu
    openPadBtn.addEventListener("click", (e) => {
      let open = true;
      e.currentTarget.classList.add("d-none");
      e.currentTarget.classList.remove("d-block");
      togglePadMenu(open);
    });
    //Call togglePadMenu() to switch hide/show menu
    closePadBtn.addEventListener("click", (e) => {
      let open = false;
      e.currentTarget.classList.add("d-none");
      e.currentTarget.classList.remove("d-block");
      togglePadMenu(open);
    });

    //Hide nav pad view when clicking outside
    document.addEventListener("click", function (event) {
      let isNavPad = navPadElement.contains(event.target);
      navPadOutside(isNavPad);
    });

    //hide menuPad when clicking on li
    for (let item of menuPadItems) {
      item.addEventListener("click", () => {
        let open = false;
        navPaditem(open);
      });
    }
  },
  card() {
    const btnOpen = document.querySelectorAll(".card-open");
    const cardBody = document.querySelectorAll(".card .card-body");
    const btnClose = document.querySelectorAll(".card-close");
    const cardGalleries = document.querySelectorAll(".card-gallery");
    const btnV = document.querySelectorAll(".card-gallery-v");
    const btnH = document.querySelectorAll(".card-gallery-h");
    const btnL = document.querySelectorAll(".card-gallery-l");
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
  },
  carousel() {
    const carousels = document.querySelectorAll(".carousel");
    const controls = document.querySelectorAll(".carousel-cta");
    const arrayCarousels = [];
    let currentIndex = 1;
    //get all id from .carousel and push them in arrayCarousels
    for (let carousel of carousels) {
      let tmpCarousel = carousel.getAttribute("id");
      arrayCarousels.push("#" + tmpCarousel);
    }

    straightCarousel = (id, idx) => {
      const carouselID = document.querySelector(id);
      const sliders = carouselID.querySelectorAll(".carousel-slide");

      if (currentIndex < 1) {
        currentIndex = sliders.length;
      }
      if (currentIndex > sliders.length) {
        currentIndex = 1;
      }

      for (let slide of sliders) {
        slide.classList.remove("d-block");
        slide.classList.add("d-none");
      }

      sliders[currentIndex - 1].classList.remove("d-none");
      sliders[currentIndex - 1].classList.add("d-block");
    };

    for (let btn of controls) {
      btn.addEventListener("click", (e) => {
        //fetch current carousel id
        let tmpId = "#" + e.currentTarget.parentNode.id;
        //check if cta is prev or next and go to to next or prev slide
        let isPrev = e.currentTarget.classList.contains("carousel-prev");
        isPrev
          ? straightCarousel(tmpId, currentIndex--)
          : straightCarousel(tmpId, currentIndex++);
      });
    }

    //get all id to auto launch straightCarousel()
    for (let id of arrayCarousels) {
      straightCarousel(id, currentIndex);
    }
  },
  form() {
    document.addEventListener(
      "invalid",
      (function () {
        return function (e) {
          e.preventDefault();
        };
      })(),
      true
    );
  },
  image() {
    const imagesGallery = document.querySelectorAll(".image-fit");
    const imagesLightbox = document.querySelectorAll(".image-lightbox");
    for (let image of imagesGallery) {
      //get width & height of each img
      let width = image.naturalWidth;
      let height = image.naturalHeight;
      //add classes dependong if img is portrait, landscape or square
      if (width > height) image.classList.add("image-fit-landscape");
      if (width < height) image.classList.add("image-fit-portrait");
      if (width === height) image.classList.add("image-fit-square");
    }

    //lightbox function with toggling class
    imgLightBox = (picture) => {
      picture.classList.toggle("image-highlighted");
    };
    //call imgHighlight
    for (let image of imagesLightbox) {
      image.addEventListener("click", () => {
        imgLightBox(image);
      });
    }
  },
  list() {
    const accordionContainer = document.querySelectorAll(
      ".accordion-container"
    );
    const listContainer = document.querySelectorAll(
      ".accordion-container .list-container"
    );
    const accordionCta = document.querySelectorAll(".accordion-cta");

    //set attr for each triiger and list container
    for (let i = 0; i < listContainer.length; i++) {
      listContainer[i].setAttribute("data-accordion", i);
      accordionCta[i].setAttribute("data-accordion", i);
    }

    //show hide list
    toggleList = (accordion, trigger) => {
      if (
        accordion.getAttribute("data-accordion") ===
        trigger.getAttribute("data-accordion")
      ) {
        //accordion.classList.toggle("d-none");
        accordion.classList.toggle("accordion-open");
        accordion.classList.toggle("accordion-close");
      }
    };

    //call toggleList()
    for (let btn of accordionCta) {
      btn.addEventListener("click", (e) => {
        btn = e.currentTarget;
        //get current list
        let currentList = btn.parentNode.nextSibling.nextSibling;
        btn.classList.toggle("accordion-rotate-trigger");
        toggleList(currentList, btn);
      });
    }
  },
  notification() {
    const arrayNotifications = document.querySelectorAll(".notification");
    const arrayOpenButtons = document.querySelectorAll(".notification-open");
    const arrayCloseButtons = document.querySelectorAll(".notification-close");
    const dismissTime = 4200;

    /*
    Set atrr in notification
    */
    let i = 0;
    for (let notification of arrayNotifications) {
      i++;
      notification.setAttribute("data-notification", i);
    }

    /*
    Set attr in button
    */
    j = 0;
    for (let btn of arrayOpenButtons) {
      j++;
      btn.setAttribute("data-notification", j);
    }

    openNotification = (trigger) => {
      for (let currentBtn of arrayOpenButtons) {
        //get current btn attr
        currentBtn = trigger;
        for (let notif of arrayNotifications) {
          //get current notif
          let currentNotif = notif.getAttribute("data-notification", trigger);
          if (currentNotif === trigger) {
            notif.classList.remove("d-none");
            notif.classList.add("d-block");
          }
          //toggling
          if (trigger !== currentNotif) {
            notif.classList.remove("d-block");
            notif.classList.add("d-none");
          }
        }
      }
    };
    //call openNotification()
    for (let btn of arrayOpenButtons) {
      btn.addEventListener("click", (e) => {
        let currentBtn = e.currentTarget.getAttribute("data-notification");
        openNotification(currentBtn);
      });
    }
    //close
    closeNotification = (trigger) => {
      for (let currentBtn of arrayCloseButtons) {
        //get current btn attr
        currentBtn = trigger;
        for (let notif of arrayNotifications) {
          //get current notif
          let currentNotif = notif.getAttribute("data-notification", trigger);
          if (currentNotif !== trigger) {
            notif.classList.remove("d-block");
            notif.classList.add("d-none");
          }
        }
      }
    };
    //call closeNotification()
    for (let btn of arrayCloseButtons) {
      btn.addEventListener("click", (e) => {
        let currentBtn = e.currentTarget.getAttribute("data-notification");
        closeNotification(currentBtn);
      });
    }
    //auto-dismiss
    autoDismiss = () => {
      for (let notif of arrayNotifications) {
        if (notif.classList.contains("auto-dismiss")) {
          setTimeout(() => {
            notif.classList.remove("d-block");
            notif.classList.add("d-none");
          }, dismissTime);
        }
      }
    };
    //call autoDismiss()
    for (let btn of arrayOpenButtons) {
      btn.addEventListener("click", () => {
        autoDismiss();
      });
    }
  },
};

window.addEventListener("load", () => {
  //   S.nav();
  //   S.navPad();
  //S.card
  //S.carousel
  //S.form
  //S.image
  //S.list
  //S.notification
});
