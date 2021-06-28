//consts for classic nav
const navs = document.querySelectorAll(".nav");
const menus = document.querySelectorAll(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu-item");
const openBtn = document.querySelectorAll(".nav .open");
const closeBtn = document.querySelectorAll(".nav .close");
//consts for nav pad
const menusPad = document.querySelectorAll(".nav-pad-menu");
const menuItemsPad = document.querySelectorAll(".navpad--menu-item");
const openBtnPad = document.querySelectorAll(".nav-pad .open");
const closeBtnPad = document.querySelectorAll(".nav-pad .close");

/*
Open inner nav
Nav used for straight frmaework demo
*/
straightNav = () => {
  const arrayStraightNav = [
    { link: "/button.html", linkName: "button" },
    { link: "/card.html", linkName: "card" },
    { link: "/carousel.html", linkName: "carousel" },
    { link: "/chart.html", linkName: "chart" },
    { link: "/color.html", linkName: "color" },
    { link: "/header.html", linkName: "header" },
    { link: "/modal.html", linkName: "modal" },
    { link: "/notification.html", linkName: "notification" },
    { link: "/typography.html", linkName: "typography" },
    { link: "/nav.html", linkName: "nav" },
  ];
  const straightNavClassic = document.querySelector("#straightNav");
  const straightMenu = straightNavClassic.querySelector(".nav-menu");
  for (let url of arrayStraightNav) {
    straightMenu.innerHTML += `<li class="nav-menu-item" role="menuitem">
    <a class="nav-menu-link" href="${url.link}" rel="noopener">
        ${url.linkName}
    </a>
    </li>`;
  }
};
straightNav();
/*
Close inner nav
*/

classicNav = () => {
  //fetch and set all data-attr on appropriate elements
  for (let i = 0; i < navs.length; i++) {
    navs[i].setAttribute("data-nav", i);
  }
  for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].setAttribute("data-nav", i);
  }
  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].setAttribute("data-nav", i);
  }
  for (let i = 0; i < menus.length; i++) {
    menus[i].setAttribute("data-nav", i);
  }

  //show menu
  for (let btn of openBtn) {
    btn.addEventListener("click", (e) => {
      for (let menu of menus) {
        if (menu.getAttribute("data-nav") === e.currentTarget.getAttribute("data-nav")) {
          e.currentTarget.classList.add("d-none");
          e.currentTarget.classList.remove("d-block");
          for (let btn of closeBtn) {
            btn.classList.remove("d-none");
            btn.classList.add("d-block");
          }
          menu.classList.remove("d-none");
          menu.classList.add("d-block");
        }
      }
    });
  }

  //hide menu
  for (let btn of closeBtn) {
    btn.addEventListener("click", (e) => {
      for (let menu of menus) {
        if (menu.getAttribute("data-nav") === e.currentTarget.getAttribute("data-nav")) {
          e.currentTarget.classList.add("d-none");
          e.currentTarget.classList.remove("d-block");
          for (let btn of openBtn) {
            btn.classList.remove("d-none");
            btn.classList.add("d-block");
          }
          menu.classList.remove("d-block");
          menu.classList.add("d-none");
        }
      }
    });
  }
  //hide menu when clicking on li
  for (let item of menuItems) {
    item.addEventListener("click", () => {
      for (let menu of menus) {
        menu.classList.remove("d-block");
        menu.classList.add("d-none");
      }
      for (let btn of closeBtn) {
        btn.classList.add("d-none");
        btn.classList.remove("d-block");
      }
      for (let btn of openBtn) {
        btn.classList.remove("d-none");
        btn.classList.add("d-block");
      }
    });
  }
};
classicNav();

/*
Open navPad
*/
navPad = () => {
  //fetch and set all data-attr on appropriate elements
  for (let i = 0; i < openBtnPad.length; i++) {
    openBtnPad[i].setAttribute("data-nav", i);
  }
  for (let i = 0; i < menusPad.length; i++) {
    menusPad[i].setAttribute("data-nav", i);
  }
  for (let i = 0; i < closeBtnPad.length; i++) {
    closeBtnPad[i].setAttribute("data-nav", i);
  }
  //show menu
  for (let btn of openBtnPad) {
    btn.addEventListener("click", (e) => {
      for (let menu of menusPad) {
        if (menu.getAttribute("data-nav") === btn.getAttribute("data-nav")) {
          e.currentTarget.classList.add("d-none");
          e.currentTarget.classList.remove("d-block");
          for (let btn of closeBtnPad) {
            btn.classList.remove("d-none");
            btn.classList.add("d-block");
          }
          menu.classList.add("d-block");
        }
      }
    });
  }

  //hide menu
  for (let btn of closeBtnPad) {
    btn.addEventListener("click", (e) => {
      for (let menu of menusPad) {
        if (menu.getAttribute("data-nav") === btn.getAttribute("data-nav")) {
          e.currentTarget.classList.add("d-none");
          e.currentTarget.classList.remove("d-block");
          for (let btn of openBtnPad) {
            btn.classList.remove("d-none");
            btn.classList.add("d-block");
          }
          menu.classList.remove("d-block");
        }
      }
    });
  }
  //hide menu when clicking on li
  for (let item of menuItemsPad) {
    item.addEventListener("click", () => {
      menuPad.classList.remove("d-block");
      menuPad.classList.add("d-none");
      closeBtnPad.classList.add("d-none");
      closeBtnPad.classList.remove("d-block");
      openBtnPad.classList.remove("d-none");
      openBtnPad.classList.add("d-block");
    });
  }
};
navPad();

// let idParent = e.currentTarget.parentNode.parentNode.id;
// console.log(idParent);

// for (let item of menuItems) {
//     item.addEventListener("click", (e) => {
//       for (let menu of menus) {
//        // if (menu.getAttribute("data-nav") === item.getAttribute("data-nav")) {
//             menu.classList.remove("d-block");
//             menu.classList.add("d-none");
//             e.currentTarget.classList.add("d-none");
//             e.currentTarget.classList.remove("d-block");
//           for (let btn of openBtn) {
//             btn.classList.remove("d-none");
//             btn.classList.add("d-block");
//           }
//           for (let btn of closeBtn) {
//             btn.classList.add("d-none");
//             btn.classList.remove("d-block");
//           }
//         //}
//       }
//     });
//   }
