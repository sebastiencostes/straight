const controls = document.querySelectorAll('.carousel-cta')
let  slideIndex = 1
//var slideIndex = Array.prototype.indexOf.call(parent.children, child);

carousel = (id) => {
  const carouselID = document.querySelector(id)
  const sliders = carouselID.querySelectorAll('.carousel-slide')

  if (slideIndex < 1) {
    slideIndex = sliders.length
  }
  if (slideIndex > sliders.length) {
    slideIndex = 1
  }

  for (let slide of sliders) {
    slide.classList.remove('d-block')
    slide.classList.add('d-none')
  }
  
  sliders[slideIndex -1].classList.remove('d-none')
  sliders[slideIndex -1].classList.add('d-block')
  console.log('slideIndex dans carousel: ' + slideIndex)
}

for(let btn of controls) {
  btn.addEventListener('click', (e) => {
    //fetch current carousel id
    let tmpId = '#' + e.currentTarget.parentNode.id

    //check if cta is prev or next and go to to next or prev slide
    let isPrev = e.currentTarget.classList.contains('carousel-prev')
    isPrev ? (carousel(tmpId), slideIndex--) : (carousel(tmpId), slideIndex++)

    console.log('slideIndex dans button : ' + slideIndex)
  })
}

carousel('#carousel1')
carousel('#carousel2')
carousel('#carousel3')
