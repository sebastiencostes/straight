const arrayBgFlat = [
  {
    colorClass: "bg-blue-light",
  },
  {
    colorClass: "bg-blue",
  },
  {
    colorClass: "bg-blue-dark",
  },
  {
    colorClass: "bg-orange-light",
  },
  {
    colorClass: "bg-orange",
  },
  {
    colorClass: "bg-orange-dark",
  },
  {
    colorClass: "bg-red-light",
  },
  {
    colorClass: "bg-red",
  },
  {
    colorClass: "bg-red-dark",
  },
  {
    colorClass: "bg-green-light",
  },
  {
    colorClass: "bg-green",
  },
  {
    colorClass: "bg-green-dark",
  },
  {
    colorClass: "bg-yellow-light",
  },
  {
    colorClass: "bg-yellow",
  },
  {
    colorClass: "bg-yellow-dark",
  },
  {
    colorClass: "bg-purple-light",
  },
  {
    colorClass: "bg-purple",
  },
  {
    colorClass: "bg-purple-dark",
  },
  {
    colorClass: "bg-pink-light",
  },
  {
    colorClass: "bg-pink",
  },
  {
    colorClass: "bg-pink-dark",
  },
  {
    colorClass: "bg-turquoise-light",
  },
  {
    colorClass: "bg-turquoise",
  },
  {
    colorClass: "bg-turquoise-dark",
  },
  {
    colorClass: "bg-brown-light",
  },
  {
    colorClass: "bg-brown",
  },
  {
    colorClass: "bg-brown-dark",
  },
  {
    colorClass: "bg-navy-light",
  },
  {
    colorClass: "bg-navy",
  },
  {
    colorClass: "bg-navy-dark",
  },
  {
    colorClass: "bg-grey-light",
  },
  {
    colorClass: "bg-grey",
  },
  {
    colorClass: "bg-grey-dark",
  },
  {
    colorClass: "bg-carbon-light",
  },
  {
    colorClass: "bg-carbon",
  },
  {
    colorClass: "bg-carbon-dark",
  },
];
const arrayBgGrad = [
  {
    colorClass: "bg-grad-blue",
  },
  {
    colorClass: "bg-grad-blue-dark",
  },
  {
    colorClass: "bg-grad-orange",
  },
  {
    colorClass: "bg-grad-orange-dark",
  },
  {
    colorClass: "bg-grad-red",
  },
  {
    colorClass: "bg-grad-red-dark",
  },
  {
    colorClass: "bg-grad-green",
  },
  {
    colorClass: "bg-grad-green-dark",
  },
  {
    colorClass: "bg-grad-yellow",
  },
  {
    colorClass: "bg-grad-yellow-dark",
  },
  {
    colorClass: "bg-grad-purple",
  },
  {
    colorClass: "bg-grad-purple-dark",
  },
  {
    colorClass: "bg-grad-pink",
  },
  {
    colorClass: "bg-grad-pink-dark",
  },
  {
    colorClass: "bg-grad-turquoise",
  },
  {
    colorClass: "bg-grad-turquoise-dark",
  },
  {
    colorClass: "bg-grad-brown",
  },
  {
    colorClass: "bg-grad-brown-dark",
  },
  {
    colorClass: "bg-grad-navy",
  },
  {
    colorClass: "bg-grad-navy-dark",
  },
  {
    colorClass: "bg-grad-grey",
  },
  {
    colorClass: "bg-grad-grey-dark",
  },
  {
    colorClass: "bg-grad-carbon",
  },
  {
    colorClass: "bg-grad-carbon-dark",
  },
];
arrayTextColors = [
  {
    colorClass: "yellow",
  },
  {
    colorClass: "orange",
  },
  {
    colorClass: "red",
  },
  {
    colorClass: "purple",
  },
  {
    colorClass: "blue",
  },
  {
    colorClass: "green",
  },
  {
    colorClass: "pink",
  },
  {
    colorClass: "turquoise",
  },
  {
    colorClass: "brown",
  },
  {
    colorClass: "grey",
  },
  {
    colorClass: "navy",
  },
  {
    colorClass: "carbon",
  },
];
arrayBorderColors = [
  {
    colorClass: "yellow",
  },
  {
    colorClass: "orange",
  },
  {
    colorClass: "red",
  },
  {
    colorClass: "purple",
  },
  {
    colorClass: "blue",
  },
  {
    colorClass: "green",
  },
  {
    colorClass: "pink",
  },
  {
    colorClass: "turquoise",
  },
  {
    colorClass: "brown",
  },
  {
    colorClass: "grey",
  },
  {
    colorClass: "navy",
  },
  {
    colorClass: "black",
  },
];
const flatPalette = document.querySelector(".flat-palette");
const gradPalette = document.querySelector(".gradient-palette");
const textPalette = document.querySelector(".text-palette");
const borderPalette = document.querySelector(".border-palette");

//bg-flat
for (let color of arrayBgFlat) {
  flatPalette.innerHTML += `<div class="t-center">
        <span class="text">${color.colorClass}</span>
        <div class="b-smooth flat-color m-t-1 d-flex i-center h-rem-10 ${color.colorClass} j-center" />
    </div>`;
}

//bg-grad
for (let color of arrayBgGrad) {
  gradPalette.innerHTML += `<div class="t-center">
          <span class="text">${color.colorClass}</span>
          <div class="b-smooth flat-color m-t-1 d-flex i-center h-rem-10 ${color.colorClass} j-center" />
      </div>`;
}

//text
for (let color of arrayTextColors) {
  textPalette.innerHTML += `
    <div class="t-center">
      <p class="t-lowercase">
        <span class="t-${color.colorClass}-light">t-${color.colorClass}-light</span>
      </p>
    </div>
    <div class="t-center">
      <p class="t-lowercase">
        <span class="t-${color.colorClass}">t-${color.colorClass}</span>
      </p>
    </div>
    <div class="t-center">
      <p class="t-lowercase">
        <span class="t-${color.colorClass}-dark">t-${color.colorClass}-dark</span>
      </p>
    </div>
 `;
}

//border
for (let color of arrayBorderColors) {
  borderPalette.innerHTML += `
    <div class="t-center b-${color.colorClass}">
      <p class="t-lowercase">
        b-${color.colorClass}
      </p>
    </div>
 `;
}
