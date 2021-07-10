const main = document.querySelector("main");
const containerBtn = document.querySelector("#containerTrigger");
const gridContainer1 = document.querySelector("#gridExample1");
const gridContainer2 = document.querySelector("#gridExample2");
const gridContainer3 = document.querySelector("#gridExample3");
const gridContainer4 = document.querySelector("#gridExample4");
const gridContainer4a = document.querySelector("#gridExample4a");
const gridContainer5 = document.querySelector("#gridExample5");
const gridContainer6 = document.querySelector("#gridExample6");
const demoAlignSelves = document.querySelectorAll(".demo-stretch");
const gridBtn = document.querySelector("#gridTrigger");
const timeContainer = 4200;

//demo on container
removeContainer = () => {
    main.classList.remove("container-fix");
    setTimeout(() => {
        main.classList.add("container-fix");
      }, timeContainer);
}
containerBtn.addEventListener("click", () => {
    removeContainer();
});

//creat grid examples
createGridLayout = () => {
    for(let i = 0; i < 32; i++) {
        gridContainer1.innerHTML += `<div class="h-rem-8 bg-navy"></div>`
        gridContainer2.innerHTML += `<div class="h-rem-8 bg-navy border"></div>`
        gridContainer3.innerHTML += `<div class="h-rem-8 bg-navy border"></div>`
        gridContainer4.innerHTML += `<div class="h-rem-8 bg-navy border"></div>`
        gridContainer4a.innerHTML += `<div class="h-rem-8 bg-navy"></div>`
    }
    for(let i = 0; i < 10; i++) {
        gridContainer5.innerHTML += `<div class="p-2 d-flex j-between f-dir-col bg-navy h-rem-40">
        <div>
            <p class="h4 t-white">item title</p>
        </div>
        <section>
            <p class="t-white">item body</p>
        </section>
        <div>
            <span class="t-white">item footer</span>
        </div>
    </div>`
    }
};createGridLayout();

//grid zone align self
playWithgrid = () => {
    for(let alignSelf of demoAlignSelves) {
        alignSelf.classList.add("self-stretch");
        setTimeout(() => {
            alignSelf.classList.remove("self-stretch");
          }, timeContainer);
    }
}
gridBtn.addEventListener("click", () => {
    playWithgrid();
});