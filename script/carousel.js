let carouselsId = "";
let ids = [];
let classes = []
let slideIndex = 1;
const carousels = document.querySelectorAll(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const next = document.querySelector(".carousel-next");
const prev = document.querySelector(".carousel-prev");
const buttonsPrev = document.querySelectorAll(".carousel-prev");
const buttonsNext = document.querySelectorAll(".carousel-next");
const error =
  'Straight Carousel - Simon says : ‘Please add an ID to <article id="" class="carousel" />‘';



  for(carousel of carousels) {
    let tmpId = carousel.getAttribute("id");
    ids.push(tmpId);
      for (let slide of slides) {
        let tmpClass = tmpId+ '  ' +slide.getAttribute("class");
        console.log(tmpClass)
      }
      
  }
  console.log(ids.includes('carousel'));
////ids
  






straigthCarousel(slideIndex);


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

for(let btn of buttonsPrev) {
  btn.addEventListener("click", (e) => {
  carouselsId = e.currentTarget.parentNode.id;
  for (let slide of slides) {
    slide.setAttribute("straigth-carousel", carouselsId);
    // let isId = slide.getAttribute("straigth-carousel") === carouselsId;
    // isId ? carousel((slideIndex = slideIndex - 1)) : console.log(error);
  }
  straigthCarousel((slideIndex = slideIndex - 1));
  console.log(carouselsId);
});
}

for(let btn of buttonsNext) {
  btn.addEventListener("click", (e) => {
  carouselsId = e.currentTarget.parentNode.id;
  for (let slide of slides) {
    slide.setAttribute("straigth-carousel", carouselsId);
    // let isId = slide.getAttribute("straigth-carousel") === carouselsId;
    // isId ? carousel((slideIndex = slideIndex + 1)) : console.log(error);
  }
  straigthCarousel((slideIndex = slideIndex + 1));
  console.log(carouselsId);
});
}


function straigthCarousel(tmpSlideIndex) {
  if (tmpSlideIndex < 1) {
    slideIndex = slides.length;
  }
  if (tmpSlideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

