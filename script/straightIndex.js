const straightAvailableModule = document.querySelector('#straightAvailableModule');
const arrayModules  = [
    {   
        title: 'button',
        url: 'module',
        img: 'button',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'card',
        url: 'module',
        img: 'card',
        content: 'lorem ipsum',
        subtitle: 'highlight product'
    },
    {   
        title: 'carousel',
        url: 'module',
        img: 'carousel',
        content: 'lorem ipsum',
        subtitle: 'next & prev'
    },
    {   
        title: 'color',
        url: 'module',
        img: 'color',
        content: 'lorem ipsum',
        subtitle: 'palette'
    },
    {   
        title: 'form',
        url: 'module',
        img: 'form',
        content: 'lorem ipsum',
        subtitle: 'keep in touch'
    },
    {   
        title: 'header',
        url: 'module',
        img: 'header',
        content: 'lorem ipsum',
        subtitle: 'head-up your site'
    },
    {   
        title: 'helper',
        url: 'module',
        img: 'helper',
        content: 'lorem ipsum',
        subtitle: 'fix & customize'
    },
    {   
        title: 'image',
        url: 'module',
        img: 'image',
        content: 'lorem ipsum',
        subtitle: 'responsive & gallery'
    },
    {   
        title: 'layout',
        url: 'module',
        img: 'layout',
        content: 'lorem ipsum',
        subtitle: 'grid system & more'
    },
    {   
        title: 'list',
        url: 'module',
        img: 'list',
        content: 'lorem ipsum',
        subtitle: 'standard & accordion'
    },
    {   
        title: 'nav',
        url: 'module',
        img: 'nav',
        content: 'lorem ipsum',
        subtitle: 'list & pad'
    },
    {   
        title: 'notification',
        url: 'module',
        img: 'notification',
        content: 'lorem ipsum',
        subtitle: 'toast & modal'
    },
    {   
        title: 'table',
        url: 'module',
        img: 'table',
        content: 'lorem ipsum',
        subtitle: 'show your data'
    },
    {   
        title: 'template',
        url: 'module',
        img: 'template',
        content: 'lorem ipsum',
        subtitle: 'miscellaneous example'
    },
    {   
        title: 'typography',
        url: 'module',
        img: 'typography',
        content: 'lorem ipsum',
        subtitle: 'from A to Z'
    }
];

for(let module of arrayModules) {
    straightAvailableModule.innerHTML += `              
<article class="card b-shadow-hovered">
    <header class="card-header">
        <h4 class="card-title t-ellipsis">${module.title}</h4>
        <button class="card-cta btn-square-s card-open" type="button" aria-label="open" data-card="">
            <ion-icon name="ellipsis-horizontal" />
        </button>
    </header>
    <a href="/${module.title}.html" rel="noopener" class="card-img-container">
        <picture>
            <source srcset="/assets/img/${module.url}/${module.img}.png" media="(min-width: 1400px)">
            <source srcset="/assets/img/${module.url}/${module.img}.png" media="(min-width: 992px)">
            <source srcset="/assets/img/${module.url}/${module.img}.png" media="(min-width: 728px)">
            <img class="card-img" src="/assets/img/${module.url}/${module.img}.png"
                alt="${module.title} module">
        </picture>
    </a>
    <section class="card-body d-none" data-card="">
        <header class="card-body-header">
            <h4 class="card-body-title">
                <a href="/${module.title}.html" rel="noopener">${module.title}</a>
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
</article>`
}