const accordionContainer = document.querySelectorAll(".accordion-container");
const listContainer = document.querySelectorAll(".list-container");
const accordionCta = document.querySelectorAll(".accordion-cta");

//set attr for each triiger and list container
for(let i = 0;  i < listContainer.length; i++) {
    listContainer[i].setAttribute('data-accordion', i);
    accordionCta[i].setAttribute('data-accordion', i);
}

//show hide list
toggleList = (accordion, trigger) => {
    if(accordion.getAttribute("data-accordion") === trigger.getAttribute("data-accordion")) {
        accordion.classList.toggle("d-none");
    }
};

//call toggleList()
for (let btn of accordionCta) {
  btn.addEventListener("click", (e) => {
    btn = e.currentTarget;
    //get current list
    let currentList = btn.parentNode.nextSibling.nextSibling;
    btn.classList.toggle("accordion-rotate-trigger");
    toggleList(currentList, btn);
  });
}
