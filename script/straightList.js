const arrayListAccordionColors = [
  { color: "accordionYellow" },
  { color: "accordionOrange" },
  { color: "accordionRed" },
  { color: "accordionPurple" },
  { color: "accordionBlue" },
  { color: "accordionGreen" },
  { color: "accordionPink" },
  { color: "accordionTurquoise" },
  { color: "accordionBrown" },
  { color: "accordionGrey" },
  { color: "accordionNavy" },
  { color: "accordionBlack" }
];

for (let list of arrayListAccordionColors) {
  const accordion = document.querySelector("#" + list.color);
  accordion.innerHTML += `
    <li class="list-content">
        <div class="list-left-zone">
            <figure class="list-left-zone-image">
                <img class="responsive-img" src="/assets/img/list/list.png" alt="">
                <figcaption class="caption-img-title-container">
                    <p class="caption-img-title">title</p>
                </figcaption>
            </figure>
        </div>
        <div class="list-center-zone">
            your list content
        </div>
        <div class="list-right-zone">
            <button class="btn-square-s btn-blue m-r-1">
                <ion-icon name="remove-outline"></ion-icon>
            </button>
            <span>
                1
            </span>
            <button class="btn-square-s btn-blue m-l-1 m-r-1">
                <ion-icon name="add-outline"></ion-icon>
            </button>
            <button class="btn-square-s btn-red m-l-1">
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        </div>
    </li>
    <li class="list-content">
    <div class="list-left-zone">
        <figure class="list-left-zone-image">
            <img class="responsive-img" src="/assets/img/list/list.png" alt="">
            <figcaption class="caption-img-title-container">
                <p class="caption-img-title">title</p>
            </figcaption>
        </figure>
    </div>
    <div class="list-center-zone">
        your list content
    </div>
    <div class="list-right-zone">
        <button class="btn-square-s btn-blue m-r-1">
            <ion-icon name="remove-outline"></ion-icon>
        </button>
        <span>
            1
        </span>
        <button class="btn-square-s btn-blue m-l-1 m-r-1">
            <ion-icon name="add-outline"></ion-icon>
        </button>
        <button class="btn-square-s btn-red m-l-1">
            <ion-icon name="trash-outline"></ion-icon>
        </button>
    </div>
</li>
<li class="list-content">
<div class="list-left-zone">
    <figure class="list-left-zone-image">
        <img class="responsive-img" src="/assets/img/list/list.png" alt="">
        <figcaption class="caption-img-title-container">
            <p class="caption-img-title">title</p>
        </figcaption>
    </figure>
</div>
<div class="list-center-zone">
    your list content
</div>
<div class="list-right-zone">
    <button class="btn-square-s btn-blue m-r-1">
        <ion-icon name="remove-outline"></ion-icon>
    </button>
    <span>
        1
    </span>
    <button class="btn-square-s btn-blue m-l-1 m-r-1">
        <ion-icon name="add-outline"></ion-icon>
    </button>
    <button class="btn-square-s btn-red m-l-1">
        <ion-icon name="trash-outline"></ion-icon>
    </button>
</div>
</li>
<li class="list-content">
<div class="list-left-zone">
    <figure class="list-left-zone-image">
        <img class="responsive-img" src="/assets/img/list/list.png" alt="">
        <figcaption class="caption-img-title-container">
            <p class="caption-img-title">title</p>
        </figcaption>
    </figure>
</div>
<div class="list-center-zone">
    your list content
</div>
<div class="list-right-zone">
    <button class="btn-square-s btn-blue m-r-1">
        <ion-icon name="remove-outline"></ion-icon>
    </button>
    <span>
        1
    </span>
    <button class="btn-square-s btn-blue m-l-1 m-r-1">
        <ion-icon name="add-outline"></ion-icon>
    </button>
    <button class="btn-square-s btn-red m-l-1">
        <ion-icon name="trash-outline"></ion-icon>
    </button>
</div>
</li>
<li class="list-content">
<div class="list-left-zone">
    <figure class="list-left-zone-image">
        <img class="responsive-img" src="/assets/img/list/list.png" alt="">
        <figcaption class="caption-img-title-container">
            <p class="caption-img-title">title</p>
        </figcaption>
    </figure>
</div>
<div class="list-center-zone">
    your list content
</div>
<div class="list-right-zone">
    <button class="btn-square-s btn-blue m-r-1">
        <ion-icon name="remove-outline"></ion-icon>
    </button>
    <span>
        1
    </span>
    <button class="btn-square-s btn-blue m-l-1 m-r-1">
        <ion-icon name="add-outline"></ion-icon>
    </button>
    <button class="btn-square-s btn-red m-l-1">
        <ion-icon name="trash-outline"></ion-icon>
    </button>
</div>
</li>
<li class="list-content">
<div class="list-left-zone">
    <figure class="list-left-zone-image">
        <img class="responsive-img" src="/assets/img/list/list.png" alt="">
        <figcaption class="caption-img-title-container">
            <p class="caption-img-title">title</p>
        </figcaption>
    </figure>
</div>
<div class="list-center-zone">
    your list content
</div>
<div class="list-right-zone">
    <button class="btn-square-s btn-blue m-r-1">
        <ion-icon name="remove-outline"></ion-icon>
    </button>
    <span>
        1
    </span>
    <button class="btn-square-s btn-blue m-l-1 m-r-1">
        <ion-icon name="add-outline"></ion-icon>
    </button>
    <button class="btn-square-s btn-red m-l-1">
        <ion-icon name="trash-outline"></ion-icon>
    </button>
</div>
</li>`;
}
