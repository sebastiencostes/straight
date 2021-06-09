const slides = document.querySelectorAll(".carousel-slide");
const btnCarousel = document.querySelectorAll(".carousel-cta");
const next = document.querySelector(".carousel-next");
const prev = document.querySelector(".carousel-prev");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}




// prev.addEventListener("click", prevSlide);
// next.addEventListener("click", nextSlide);
// slides[slideIndex].style.display = "block";
// function prevSlide(n) {
//   if(slideIndex < 1) {
//     slideIndex = slides.length;
//   }
//   for(let i = 0; i < slides.length; i++) {
    
//     slides[i].style.display = "none";
//     console.log(slideIndex);
//   } 
//   slides[slideIndex - 1].style.display = "block";
// }

// function nextSlide() {
//   if(slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for(let i = 0; i < slides.length; i++) {
    
//     slides[i].style.display = "none";
//     console.log(slideIndex);
//   }
//   slides[slideIndex + 1].style.display = "block";
// }