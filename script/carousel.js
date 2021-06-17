const controls = document.querySelectorAll(".carousel-cta");
const carousels = document.querySelectorAll(".carousel");
const arrayCarousels = [];
let currentIndex = 1;

carousel = () => {
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

  document.addEventListener("DOMContentLoaded", () => {
    //get all id to launch straightCarousel()
    for (let id of arrayCarousels) {
      straightCarousel(id, 1);
    }
  });
};
carousel();
