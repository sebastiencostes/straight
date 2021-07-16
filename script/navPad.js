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
