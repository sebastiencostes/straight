const straightAvailableModule = document.querySelector(
  "#straightAvailableModule"
);
const arrayModules = [
  {
    title: "button",
    url: "module",
    img: "button",
    content:
      "element represents a clickable item, used to submit forms or anywhere in a document for accessible, standard button functionality.",
    subtitle: "push it",
  },
  {
    title: "card",
    url: "module",
    img: "card",
    content:
      "Cards allows you to show some many contents. Related Informations must be short, clear and explicit.They offers the possibility to make some actions, add some medias and many more.",
    subtitle: "highlight product",
  },
  {
    title: "carousel",
    url: "module",
    img: "carousel",
    content:
      "  Carousels allow you to show mutli content in one component. Generally picutres with or without text are provided.",
    subtitle: "next & prev",
  },
  {
    title: "color",
    url: "module",
    img: "color",
    content:
      "Bring some colors to your project. Flat, gradient palettes and some other stuffs are available",
    subtitle: "palette",
  },
  {
    title: "form",
    url: "module",
    img: "form",
    content:
      "element represents a document section containing interactive controls for submitting information.",
    subtitle: "keep in touch",
  },
  {
    title: "header",
    url: "module",
    img: "header",
    content:
      "element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.",
    subtitle: "head-up your site",
  },
  {
    title: "helper",
    url: "module",
    img: "helper",
    content: "your toolbox !",
    subtitle: "fix & customize",
  },
  {
    title: "image",
    url: "module",
    img: "image",
    content: "element embeds an image into the document",
    subtitle: "responsive & gallery",
  },
  {
    title: "layout",
    url: "module",
    img: "layout",
    content: "the module about grid view system, breakpoint, container...",
    subtitle: "grid system & more",
  },
  {
    title: "list",
    url: "module",
    img: "list",
    content: "from standard to accordion by details element.",
    subtitle: "standard & accordion",
  },
  {
    title: "nav",
    url: "module",
    img: "nav",
    content:
      "element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.",
    subtitle: "list & pad",
  },
  {
    title: "notification",
    url: "module",
    img: "notification",
    content:
      "Information message or warning by which a person is kept informed, indicating an automatic or manual change that has happened or is about to happen.",
    subtitle: "toast & modal",
  },
  {
    title: "table",
    url: "module",
    img: "table",
    content:
      "element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.",
    subtitle: "show your data",
  },
  {
    title: "template",
    url: "module",
    img: "template",
    content: "totally random example of possibilities",
    subtitle: "miscellaneous example",
  },
  {
    title: "typography",
    url: "module",
    img: "typography",
    content: "everything you need about text.",
    subtitle: "from A to Z",
  },
];

for (let module of arrayModules) {
  straightAvailableModule.innerHTML += `              
<article class="card b-shadow-hovered">
    <header class="card-header">
        <h4 class="card-title t-ellipsis">${module.title}</h4>
        <button class="card-cta btn-square-s card-open" type="button" aria-label="open" data-card="">
            <ion-icon name="ellipsis-horizontal" />
        </button>
    </header>
    <a href="./${module.title}.html" rel="noopener" class="card-img-container">
        <picture>
            <source srcset="./assets/img/${module.url}/${module.img}.png" media="(min-width: 1400px)">
            <source srcset="./assets/img/${module.url}/${module.img}.png" media="(min-width: 992px)">
            <source srcset="./assets/img/${module.url}/${module.img}.png" media="(min-width: 728px)">
            <img class="card-img" src="./assets/img/${module.url}/${module.img}.png"
                alt="${module.title} module">
        </picture>
    </a>
    <section class="card-body d-none" data-card="">
        <header class="card-body-header">
            <h4 class="card-body-title">
                <a href="./${module.title}.html" rel="noopener">${module.title}</a>
            </h4>
            <button class="card-cta btn-square-s card-close" type="button" aria-label="close" data-card="">
                <ion-icon name="close-outline" />
            </button>
        </header>
        <p class="card-body-text">
        ${module.content}
        </p>
    </section>
    <footer class="card-footer">
        <div class="card-footer-left-container">
            <span class="card-left-text">
            ${module.subtitle}
            </span>
        </div>
    </footer>
</article>`;
}
