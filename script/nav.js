const arrayStraightNav = [
  {
    link: "/button.html",
    linkName: "button",
    icon: "ellipsis-horizontal-outline",
    color: "purple",
  },
  {
    link: "/card.html",
    linkName: "card",
    icon: "newspaper-outline",
    color: "pink",
  },
  {
    link: "/carousel.html",
    linkName: "carousel",
    icon: "code-outline",
    color: "orange",
  },
  {
    link: "/chart.html",
    linkName: "chart",
    icon: "stats-chart-outline",
    color: "turquoise",
  },
  {
    link: "/color.html",
    linkName: "color",
    icon: "color-palette-outline",
    color: "black",
  },
  { link: "/grid.html", linkName: "grid", icon: "grid-outline", color: "navy" },
  {
    link: "/header.html",
    linkName: "header",
    icon: "reader-outline",
    color: "yellow",
  },
  {
    link: "/image.html",
    linkName: "image",
    icon: "image-outline",
    color: "green",
  },
  {
    link: "/modal.html",
    linkName: "modal",
    icon: "albums-outline",
    color: "white",
  },
  {
    link: "/notification.html",
    linkName: "notification",
    icon: "notifications-outline",
    color: "red",
  },
  {
    link: "/typography.html",
    linkName: "typography",
    icon: "text-outline",
    color: "brown",
  },
  {
    link: "/nav.html",
    linkName: "nav",
    icon: "navigate-outline",
    color: "blue",
  },
  {
    link: "/utility.html",
    linkName: "utility",
    icon: "hammer-outline",
    color: "grey",
  },
];
const switchNav = document.querySelector(".switch-nav");
const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu-item");
const openBtn = document.querySelector(".nav .open");
const closeBtn = document.querySelector(".nav .close");
const gridBtn = document.querySelector(".nav .grid");
const listBtn = document.querySelector(".nav .list");
/*
NAV
*/
nav = () => {
  let isList = "";
  let isOpen = "";

  //generating list
  for (let url of arrayStraightNav) {
    switchNav.innerHTML += `<li class="nav-menu-item" role="menuitem">
    <a class="nav-menu-link btn-square-m btn-${url.color}" href="${url.link}" rel="noopener" role="button">
    <ion-icon name="${url.icon}"></ion-icon>
    </a>
    <a class="nav-menu-link-text" href="${url.link}" rel="noopener">
    ${url.linkName}
    </a>
    </li>`;
  }

/*
OPEN MENU
*/
  openMenu = (open, list) => {
    isOpen = open;
    isList = list;
    gridBtn.classList.remove("d-none");
    gridBtn.classList.add("d-block");
    isOpen ? null : closeBtn.classList.remove("d-none"),
      closeBtn.classList.add("d-block");
    isList
      ? (switchNav.classList.add("nav-menu"),
        switchNav.classList.remove("d-none"),
        switchNav.classList.add("d-block"))
      : null;
  };
  openBtn.addEventListener("click", (e) => {
    openMenu(true, true);
    e.currentTarget.classList.add("d-none");
    e.currentTarget.classList.remove("d-block");
  });

/*
CLOSE MENU
*/
  closeMenu = (close, list) => {
    isOpen = close;
    isList = list;
    gridBtn.classList.remove("d-block");
    gridBtn.classList.add("d-none");
    isOpen ? null : openBtn.classList.remove("d-none"),
      openBtn.classList.add("d-block");
    isList
      ? (switchNav.classList.remove("nav-menu"),
        switchNav.classList.add("d-none"),
        switchNav.classList.remove("d-block"))
      : null;
  };
  closeBtn.addEventListener("click", (e) => {
    closeMenu(false, true);
    e.currentTarget.classList.add("d-none");
    e.currentTarget.classList.remove("d-block");
  });

/*
GRID VIEW DISPLAYING
*/
  gridView = (list) => {
    isList = list;
    listBtn.classList.add("d-block");
    listBtn.classList.remove("d-none");

    isList
      ? null
      : (switchNav.classList.remove("nav-menu", "d-block"),
        switchNav.classList.add(
          "nav-pad-menu",
          "d-grid",
          "g-col-s-2",
          "g-col-m-3",
          "g-col-l-4",
          "g-col-xl-5",
          "g-col-xxl-6"
        ));
  };
  gridBtn.addEventListener("click", (e) => {
    gridView(false);
    e.currentTarget.classList.remove("d-block");
    e.currentTarget.classList.add("d-none");
  });

/*
LIST VIEW DISPLAYING
*/
  listView = (list) => {
    isList = list;
    gridBtn.classList.add("d-block");
    gridBtn.classList.remove("d-none");

    isList
      ? null
      : (switchNav.classList.add("nav-menu", "d-block"),
        switchNav.classList.remove(
          "nav-pad-menu",
          "d-grid",
          "g-col-s-2",
          "g-col-m-3",
          "g-col-l-4",
          "g-col-xl-5",
          "g-col-xxl-6"
        ));
  };
  listBtn.addEventListener("click", (e) => {
    listView(false);
    e.currentTarget.classList.remove("d-block");
    e.currentTarget.classList.add("d-none");
  });

  //hide menu when clicking on li
  for (let item of menuItems) {
    item.addEventListener("click", () => {
      switchNav.classList.remove("d-block");
      switchNav.classList.add("d-none");

      closeBtn.classList.add("d-none");
      closeBtn.classList.remove("d-block");

      openBtn.classList.remove("d-none");
      openBtn.classList.add("d-block");
    });
  }
};
nav();