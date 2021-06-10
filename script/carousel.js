const carousels = document.querySelectorAll(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const next = document.querySelector(".carousel-next");
const prev = document.querySelector(".carousel-prev");
const buttonsPrev = document.querySelectorAll(".carousel-prev");
const buttonsNext = document.querySelectorAll(".carousel-next");
const error = 'Straight Carousel - Simon says : ‘Please add an ID to <article id="" class="carousel" />‘'

let slideIndex = 1;
carousel(slideIndex);

// prev.addEventListener("click", () => {
//   // for(let slide of slides) {
//   //   slide.style.setProperty('--animate-duration', '0.28s');
//   //   slide.classList.remove('animate__animated', 'animate__slideInLeft');
//   //   slide.classList.add('animate__animated', 'animate__slideInRight');
//   // }
//   carousel((slideIndex = slideIndex - 1));
// });

// next.addEventListener("click", () => {
//   // for(let slide of slides) {
//   //   slide.style.setProperty('--animate-duration', '0.28s');
//   //   slide.classList.remove('animate__animated', 'animate__slideInRight');
//   //   slide.classList.add('animate__animated', 'animate__slideInLeft');
//   // }
//   carousel((slideIndex = slideIndex + 1));
// });

function carousel(tmpSlideIndex) {
  if (tmpSlideIndex < 1) {
    slideIndex = slides.length;
  }
  if (tmpSlideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let slide of slides) {
    if (
      prev.getAttribute("data-carousel") ===
        slide.getAttribute("data-carousel") &&
      next.getAttribute("data-carousel") === slide.getAttribute("data-carousel")
    ) {
      slide.style.display = "none";
    }
  }
  
  slides[slideIndex - 1].style.display = "block";
}

///////////
////1/////
//////////
let carouselsId = "";
let newCarousels = document.getElementById(carouselsId);


prev.addEventListener("click", (e) => {
  carouselsId = e.currentTarget.parentNode.id;
  for(let slide of slides) {
    slide.setAttribute('straigth-carousel', carouselsId);
    let isId = slide.getAttribute('straigth-carousel') === carouselsId;
    isId ? carousel((slideIndex = slideIndex + 1)) : console.log(error);
  }
  carousel((slideIndex = slideIndex - 1));
  console.log(carouselsId);
});

next.addEventListener("click", (e) => {
  carouselsId = e.currentTarget.parentNode.id;
  for(let slide of slides) {
    slide.setAttribute('straigth-carousel', carouselsId);
    let isId = slide.getAttribute('straigth-carousel') === carouselsId;
    isId ? carousel((slideIndex = slideIndex + 1)) : console.log(error);
  }
  carousel((slideIndex = slideIndex + 1));
  console.log(carouselsId);
});