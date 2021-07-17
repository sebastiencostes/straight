const straightAvailableModule = document.querySelector('#straightAvailableModule');
const arrayModules  = [
    {   
        title: 'button',
        url: 'button',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'card',
        url: 'card',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'carousel',
        url: 'carousel',
        img: 'carouselBig',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'color',
        url: 'color',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'form',
        url: 'form',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'header',
        url: 'header',
        img: 'header',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'helper',
        url: 'helper',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'image',
        url: 'image',
        img: 'image',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'layout',
        url: 'layout',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'nav',
        url: 'nav',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'notification',
        url: 'notification',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'template',
        url: 'template',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
    },
    {   
        title: 'typography',
        url: 'typography',
        img: 'cardV',
        content: 'lorem ipsum',
        subtitle: 'push it'
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
    <a href="/${module.url}.html" rel="noopener" class="card-img-container">
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
                <a href="/${module.url}.html" rel="noopener">${module.title}</a>
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