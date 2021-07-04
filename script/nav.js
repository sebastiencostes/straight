window.addEventListener("load", () => {
  const navElement = document.querySelector(".nav");
  const menu = document.querySelector(".nav-menu");
  const menuPad = document.querySelector(".nav-pad-menu");
  const menuItems = document.querySelectorAll(".nav-menu-item");
  const openBtn = document.querySelector(".nav .open");
  const closeBtn = document.querySelector(".nav .close");
  /*
NAV LIST
*/
  navList = () => {
    let isOpen = false;

    /*
Switching between show and hide menu
*/
    toggleMenu = (open) => {
      isOpen = open;

      isOpen
        ? (closeBtn.classList.add("d-block"),
          closeBtn.classList.remove("d-none"),
          menu.classList.remove("d-none"),
          menu.classList.add("d-block", "nav-menu"))
        : (openBtn.classList.add("d-block"),
          openBtn.classList.remove("d-none"),
          menu.classList.remove("nav-menu", "d-block"),
          menu.classList.add("d-none"),
          menu.classList.remove(
            "nav-pad-menu",
            "d-grid",
            "g-col-s-3",
            "g-col-l-4",
            "g-col-xl-5",
            "g-col-xxl-6"
          ));
    };
    //Call toggleMenu() to switch hide/show menu
    openBtn.addEventListener("click", (e) => {
      isOpen = true;
      toggleMenu(isOpen);
      e.currentTarget.classList.add("d-none");
      e.currentTarget.classList.remove("d-block");
    });
    //Call toggleMenu() to switch hide/show menu
    closeBtn.addEventListener("click", (e) => {
      isOpen = false;
      toggleMenu(isOpen);
      e.currentTarget.classList.add("d-none");
      e.currentTarget.classList.remove("d-block");
    });

    //Hide nav list view when clicking outside
    document.addEventListener("click", function (event) {
      let isNav = navElement.contains(event.target);
      isNav
        ? null
        : (menu.classList.remove("d-block"),
          menu.classList.add("d-none"),
          closeBtn.classList.add("d-none"),
          closeBtn.classList.remove("d-block"),
          openBtn.classList.remove("d-none"),
          openBtn.classList.add("d-block"));
    });

    //hide menu when clicking on li
    for (let item of menuItems) {
      item.addEventListener("click", () => {
        menu.classList.remove("d-block");
        menu.classList.add("d-none");
        closeBtn.classList.add("d-none");
        closeBtn.classList.remove("d-block");
        openBtn.classList.remove("d-none");
        openBtn.classList.add("d-block");
      });
    }
  };
  navList();

  /*
NAVPAD
*/
  navPad = () => {
    let isOpen = false;

    /*
Switching between show and hide menu
*/
    toggleMenu = (open) => {
      isOpen = open;

      isOpen
        ? (closeBtn.classList.add("d-block"),
          closeBtn.classList.remove("d-none"),
          menuPad.classList.remove("d-none"),
          menuPad.classList.add(
            "nav-pad-menu",
            "d-grid",
            "g-col-s-3",
            "g-col-l-4",
            "g-col-xl-5",
            "g-col-xxl-6"
          ))
        : (openBtn.classList.add("d-block"),
          openBtn.classList.remove("d-none"),
          menuPad.classList.add("d-none"),
          menuPad.classList.remove(
            "nav-pad-menu",
            "d-grid",
            "g-col-s-3",
            "g-col-l-4",
            "g-col-xl-5",
            "g-col-xxl-6"
          ));
    };
    //Call toggleMenu() to switch hide/show menu
    openBtn.addEventListener("click", (e) => {
      isOpen = true;
      toggleMenu(isOpen);
      e.currentTarget.classList.add("d-none");
      e.currentTarget.classList.remove("d-block");
    });
    //Call toggleMenu() to switch hide/show menu
    closeBtn.addEventListener("click", (e) => {
      isOpen = false;
      toggleMenu(isOpen);
      e.currentTarget.classList.add("d-none");
      e.currentTarget.classList.remove("d-block");
    });

    //Hide nav list view when clicking outside
    document.addEventListener("click", function (event) {
      let isNav = navElement.contains(event.target);
      isNav
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
          closeBtn.classList.add("d-none"),
          closeBtn.classList.remove("d-block"),
          openBtn.classList.remove("d-none"),
          openBtn.classList.add("d-block"));
    });

    //hide menu when clicking on li
    for (let item of menuItems) {
      item.addEventListener("click", () => {
        menuPad.classList.remove(
          "nav-pad-menu",
          "d-grid",
          "g-col-s-3",
          "g-col-l-4",
          "g-col-xl-5",
          "g-col-xxl-6"
        );
        menuPad.classList.add("d-none");
        closeBtn.classList.add("d-none");
        closeBtn.classList.remove("d-block");
        openBtn.classList.remove("d-none");
        openBtn.classList.add("d-block");
      });
    }
  };
  navPad();
});
