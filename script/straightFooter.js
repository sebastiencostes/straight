const footer = document.querySelector('#straightFooter');
const footerListA = footer.querySelector('#straightFooterListA');
const footerListB = footer.querySelector('#straightFooterListB');
const arrayFooterListA = [
    {footerLink : 'button'},
    {footerLink : 'card'},
    {footerLink : 'carousel'},
    {footerLink : 'color'},
    {footerLink : 'form'},
    {footerLink : 'header'},
    {footerLink : 'helper'},
    {footerLink : 'image'}
];
const arrayFooterListB = [
    {footerLink : 'layout'},
    {footerLink : 'list'},
    {footerLink : 'nav'},
    {footerLink : 'notification'},
    {footerLink : 'table'},
    {footerLink : 'template'},
    {footerLink : 'typography'},
    {footerLink : 'video'}
];
const author = footer.querySelector('.author');
const version = footer.querySelector('.version');
const authorString = "Sébastien COSTES";
const versionString = "v";
const year = footer.querySelector('.current-year');

//get full year in XXXX format
getCurrentYear = (element) => {
   element.innerHTML = new Date().getFullYear();
}
//get author name
getAuthor = () => {
    author.innerHTML = authorString;
}

getVersion = (versionNumber) => {
    version.innerHTML = versionString + versionNumber;
}

getFooterListA = () => {
    for(let listA of arrayFooterListA) {
    footerListA.innerHTML += ` 
    <li class="t-x-small">
        <a href="./${listA.footerLink}.html" rel="noopener">${listA.footerLink} module</a>
    </li>`
    }
}

getFooterListB = () => {
    for(let listB of arrayFooterListB) {
    footerListB.innerHTML += ` 
    <li class="t-x-small">
        <a href="./${listB.footerLink}.html" rel="noopener">${listB.footerLink} module</a>
    </li>`
    }
}

//call getCurentYear, getAuthor, lists on load
window.addEventListener("load", () => {
    getAuthor();
    getCurrentYear(year);
    getVersion("0.3");
    getFooterListA();
    getFooterListB();
});