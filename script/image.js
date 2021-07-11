const imagesGallery = document.querySelectorAll(".image-fit");
for(let image of imagesGallery) {
    image.addEventListener("load", () => {
        let width = image.naturalWidth;
        let height = image. naturalHeight;
        if(width > height) image.classList.add("image-fit-landscape");
        if(width < height) image.classList.add("image-fit-portrait");
        if(width === height) image.classList.add("image-fit-square");
    });
}