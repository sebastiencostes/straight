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
    link: "/color.html",
    linkName: "color",
    icon: "color-palette-outline",
    color: "black",
  },
  {
    link: "/form.html",
    linkName: "form",
    icon: "mail-outline",
    color: "turquoise",
  },
  {
    link: "/header.html",
    linkName: "header",
    icon: "reader-outline",
    color: "yellow",
  },
  {
    link: "/helper.html",
    linkName: "helper",
    icon: "hammer-outline",
    color: "grey",
  },
  {
    link: "/image.html",
    linkName: "image",
    icon: "image-outline",
    color: "green",
  },
  {
    link: "/layout.html",
    linkName: "layout",
    icon: "grid-outline",
    color: "navy",
  },
  {
    link: "/list.html",
    linkName: "list",
    icon: "list-outline",
    color: "purple",
  },
  {
    link: "/nav.html",
    linkName: "nav",
    icon: "navigate-outline",
    color: "blue",
  },
  {
    link: "/notification.html",
    linkName: "notification",
    icon: "notifications-outline",
    color: "red",
  },
  {
    link: "/template.html",
    linkName: "template",
    icon: "desktop-outline",
    color: "white",
  },
  {
    link: "/typography.html",
    linkName: "typography",
    icon: "text-outline",
    color: "brown",
  },
];
const straightNav = document.querySelector("#straightNav.nav");
const straightNavHeader = document.querySelector(
  "#straightNav.nav .nav-header"
);
const switchNav = document.querySelector("#straightNav .switch-nav");
const menuItems = document.querySelectorAll(".nav-menu-item");
const openBtn = document.querySelector("#straightNav.nav .open");
const closeBtn = document.querySelector("#straightNav.nav .close");
const gridBtn = document.querySelector("#straightNav.nav .grid");
const listBtn = document.querySelector("#straightNav.nav .list");
/*
  NAV
  */
nav = () => {
  let isList = true;
  let isOpen = false;

  //creating menu list for #traightNav
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
  Switching between show and hide menu
  */
  toggleMenu = (open) => {
    isOpen = open;

    isOpen
      ? (gridBtn.classList.add("d-block"),
        gridBtn.classList.remove("d-none"),
        closeBtn.classList.add("d-block"),
        closeBtn.classList.remove("d-none"),
        switchNav.classList.remove("d-none"),
        switchNav.classList.add("d-block", "nav-menu", "bg-nav", "b-shadow"),
        straightNav.classList.add("bg-nav", "b-shadow"))
      : (gridBtn.classList.remove("d-block"),
        gridBtn.classList.add("d-none"),
        listBtn.classList.remove("d-block"),
        listBtn.classList.add("d-none"),
        openBtn.classList.add("d-block"),
        openBtn.classList.remove("d-none"),
        switchNav.classList.remove("nav-menu", "d-block"),
        switchNav.classList.add("d-none"),
        switchNav.classList.remove(
          "nav-pad-menu",
          "d-grid",
          "g-col-s-3",
          "g-col-l-4",
          "g-col-xl-5",
          "g-col-xxl-6",
          "bg-nav",
          "b-shadow"
        ),
        straightNav.classList.remove("bg-nav", "b-shadow"),
        straightNavHeader.classList.remove("bg-nav", "b-shadow"));
  };
  //Call toggleMenu() to switch hide/show menu
  openBtn.addEventListener("click", (e) => {
    isOpen = true;
    toggleMenu(isOpen, isList);
    e.currentTarget.classList.add("d-none");
    e.currentTarget.classList.remove("d-block");
  });
  //Call toggleMenu() to switch hide/show menu
  closeBtn.addEventListener("click", (e) => {
    isOpen = false;
    toggleMenu(isOpen, isList);
    e.currentTarget.classList.add("d-none");
    e.currentTarget.classList.remove("d-block");
  });

  /*
  Switching between grid and list view
  */
  toggleView = (list) => {
    isList = list;
    isList
      ? (gridBtn.classList.add("d-block"),
        gridBtn.classList.remove("d-none"),
        straightNav.classList.add("bg-nav", "b-shadow"),
        switchNav.classList.add("nav-menu", "d-block", "bg-nav", "b-shadow"),
        straightNavHeader.classList.remove("bg-nav", "b-shadow"),
        switchNav.classList.remove(
          "nav-pad-menu",
          "d-grid",
          "g-col-s-3",
          "g-col-l-4",
          "g-col-xl-5",
          "g-col-xxl-6"
        ))
      : (listBtn.classList.add("d-block"),
        listBtn.classList.remove("d-none"),
        switchNav.classList.remove("nav-menu", "d-block", "bg-nav", "b-shadow"),
        straightNav.classList.remove("bg-nav", "b-shadow"),
        straightNavHeader.classList.add("bg-nav", "b-shadow"),
        switchNav.classList.add(
          "nav-pad-menu",
          "d-grid",
          "g-col-s-3",
          "g-col-l-4",
          "g-col-xl-5",
          "g-col-xxl-6"
        ));
  };
  //Call toggleView() to switch in list view
  listBtn.addEventListener("click", (e) => {
    isList = true;
    toggleView(isList);
    e.currentTarget.classList.remove("d-block");
    e.currentTarget.classList.add("d-none");
  });
  //Call toggleView() to switch in grid view
  gridBtn.addEventListener("click", (e) => {
    isList = false;
    toggleView(isList);
    e.currentTarget.classList.remove("d-block");
    e.currentTarget.classList.add("d-none");
  });

  //Hide nav list view when clicking outside
  document.addEventListener("click", function (event) {
    let isNav = straightNav.contains(event.target);
    isNav
      ? null
      : (switchNav.classList.remove("d-block", "bg-nav", "b-shadow"),
        straightNav.classList.remove("bg-nav", "b-shadow"),
        switchNav.classList.add("d-none"),
        closeBtn.classList.add("d-none"),
        closeBtn.classList.remove("d-block"),
        gridBtn.classList.add("d-none"),
        gridBtn.classList.remove("d-block"),
        openBtn.classList.remove("d-none"),
        openBtn.classList.add("d-block"));
  });

  //hide menu when clicking on li
  for (let item of menuItems) {
    item.addEventListener("click", () => {
      switchNav.classList.remove("d-block", "bg-nav", "b-shadow");
      straightNav.classList.remove("bg-nav", "b-shadow");
      switchNav.classList.add("d-none");
      closeBtn.classList.add("d-none");
      closeBtn.classList.remove("d-block");
      gridBtn.classList.add("d-none");
      gridBtn.classList.remove("d-block");
      openBtn.classList.remove("d-none");
      openBtn.classList.add("d-block");
    });
  }
};
nav();

