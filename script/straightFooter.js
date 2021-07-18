const footer = document.querySelector('#straightFooter');
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

//call getCurentYear, getAuthor on load
window.addEventListener("load", () => {
    getAuthor();
    getCurrentYear(year);
    getVersion("0.9");
});