const imagesGallery = document.querySelectorAll(".image-fit");
const imagesLightbox = document.querySelectorAll(".image-lightbox");
for (let image of imagesGallery) {
  //get width & height of each img
  let width = image.naturalWidth;
  let height = image.naturalHeight;
  //add classes dependong if img is portrait, landscape or square
  if (width > height) image.classList.add("image-fit-landscape");
  if (width < height) image.classList.add("image-fit-portrait");
  if (width === height) image.classList.add("image-fit-square");
}

//lightbox function with toggling class
imgLightBox = (picture) => {
  picture.classList.toggle("image-highlighted");
};
//call imgHighlight
for (let image of imagesLightbox) {
  image.addEventListener("click", () => {
    imgLightBox(image);
  });
}

//close targeted image when clicking outside
for (let image of imagesLightbox) {
  document.addEventListener("click", function (event) {
    let isImage = image.contains(event.target);
    !isImage ? image.classList.remove("image-highlighted") : null;
  });
}
