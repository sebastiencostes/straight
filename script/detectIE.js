//future : navigator.userAgentData.brands[0].brand
const ua = window.navigator.userAgent;
const isIE = /MSIE|Trident/.test(ua);
const isIE11 = /Trident\/7\./.test(ua);
const oldEdge = window.navigator.userAgent.indexOf("Edge/") > -1;
const bodyTagElement = document.querySelector("body");
const headerTagElement = document.querySelector("header");
const mainTagElement = document.querySelector("main");
const navTagElement = document.querySelector("nav");
const footerTagElement = document.querySelector("footer");

if (isIE || isIE11 || oldEdge) {
  headerTagElement.remove();
  mainTagElement.remove();
  navTagElement.remove();
  footerTagElement.remove();
  bodyTagElement.innerHTML += `
  <div style="text-align: center; width: 50%; margin: 25% auto;">
    <h1>Straight Framework is not suitable for any version of IE or older version of EDGE without chromium engine</h1>
    <p>According to <strong>microsoft</strong>, Internet Explorer 
    <a href="https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/" rel="noopener" target="_blank"> 
        will be retired on June 15, 2022
    </a>.
    </p>
  `;
}
