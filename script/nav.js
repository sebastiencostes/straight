const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu-item");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");

nav = () => {
openBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.add("d-none");
  e.currentTarget.classList.remove("d-block");
  closeBtn.classList.remove("d-none");
  closeBtn.classList.add("d-block");
  menu.classList.add("d-block");
});

closeBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.add("d-none");
  e.currentTarget.classList.remove("d-block");
  openBtn.classList.remove("d-none");
  openBtn.classList.add("d-block");
  menu.classList.remove("d-block");
});

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
};nav();
