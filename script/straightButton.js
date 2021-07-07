const arrayFlat = document.querySelector("#arrayFlat");
const arrayGrad = document.querySelector("#arrayGrad");
const arraySquareFlat = document.querySelector("#arraySquareFlat");
const arraySquareGrad = document.querySelector("#arraySquareGrad");
const arrayCircleflat = document.querySelector("#arrayCircleFlat");
const arrayCircleGrad = document.querySelector("#arrayCircleGrad");
const arrayDefaultBorders = document.querySelector("#arrayDefaultBorders");
arrayColorShape = [
  {
    color: "white",
  },
  {
    color: "blue",
  },
  {
    color: "red",
  },
  {
    color: "yellow",
  },
  {
    color: "orange",
  },
  {
    color: "green",
  },
  {
    color: "purple",
  },
  {
    color: "turquoise",
  },
  {
    color: "pink",
  },
  {
    color: "brown",
  },
  {
    color: "grey",
  },
  {
    color: "navy",
  },
  {
    color: "black",
  },
];

//creating buttons
for (let btn of arrayColorShape) {
  arrayFlat.innerHTML += `<button class="btn-s btn-${btn.color}" type="button" style="text-transform: capitalize;">${btn.color}</button>`;
}

//creating grad buttons
for (let btn of arrayColorShape) {
  arrayGrad.innerHTML += `<button class="btn-s btn-grad-${btn.color}" type="button">Grad ${btn.color}</button>`;
}

//creating square flat buttons
for (let btn of arrayColorShape) {
  arraySquareFlat.innerHTML += `<button class="btn-square-l btn-${btn.color}" type="button">
    <ion-icon name="add-circle-outline"></ion-icon>
</button>`;
}

//creating square grad buttons
for (let btn of arrayColorShape) {
  arraySquareGrad.innerHTML += `<button class="btn-square-l btn-grad-${btn.color}" type="button">
    <ion-icon name="add-circle-outline"></ion-icon>
</button>`;
}

//creating circle flat buttons
for (let btn of arrayColorShape) {
  arrayCircleFlat.innerHTML += `<button class="btn-circle-l btn-${btn.color}" type="button">
    <ion-icon name="add-circle-outline"></ion-icon>
</button>`;
}

//creating circle grad buttons
for (let btn of arrayColorShape) {
  arrayCircleGrad.innerHTML += `<button class="btn-circle-l btn-grad-${btn.color}" type="button">
    <ion-icon name="add-circle-outline"></ion-icon>
</button>`;
}
//creating bordered buttons
for (let btn of arrayColorShape) {
  arrayDefaultBorders.innerHTML += `<button class="btn-s btn-b-${btn.color}" type="button">
  ${btn.color}
</button>`;
}
