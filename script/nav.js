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
