const main = document.querySelector("main");
const containerBtn = document.querySelector("#containerTrigger");
const gridContainer1 = document.querySelector("#gridExample1");
const gridContainer2 = document.querySelector("#gridExample2");
const gridContainer3 = document.querySelector("#gridExample3");
const gridContainer4 = document.querySelector("#gridExample4");
const timeContainer = 4200;

removeContainer = () => {
    main.classList.remove("container-fix");
    setTimeout(() => {
        main.classList.add("container-fix");
      }, timeContainer);
}
containerBtn.addEventListener("click", () => {
    removeContainer();
});


playWithGrid = () => {
    for(let i = 0; i < 32; i++) {
        gridContainer1.innerHTML += `<section class="h-rem-8 bg-navy"></section>`
        gridContainer2.innerHTML += `<section class="h-rem-8 bg-navy border"></section>`
        gridContainer3.innerHTML += `<section class="h-rem-8 bg-navy border"></section>`
        gridContainer4.innerHTML += `<section class="h-rem-8 bg-navy border"></section>`
    }
};playWithGrid();