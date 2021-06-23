const vCard = document.querySelectorAll('#cardGallery .card');
const btnV = document.querySelector('#vGrid');
const btnH = document.querySelector('#hGrid');
const btnL = document.querySelector('#lGrid');
const btnHeaderCta = document.querySelectorAll('.open');
const cardBody = document.querySelectorAll('.card-body');
const btnClose = document.querySelectorAll('.close');

function vDisplay() {
  for (const card of vCard) {
    if (
      card.classList.contains('card-l') ||
      card.classList.contains('card-h')
    ) {
      card.classList.remove('card-l', 'card-h');
      btnV.disabled = true;
      btnH.disabled = false;
      btnL.disabled = false;
    }
  }
}
btnV.onclick = vDisplay;

function hDisplay() {
  for (const card of vCard) {
    if (card.classList.contains('card-l')) {
      card.classList.remove('card-l');
    }
    card.classList.add('card-h');
    btnH.disabled = true;
    btnV.disabled = false;
    btnL.disabled = false;
  }
}
btnH.onclick = hDisplay;

function lDisplay() {
  for (const card of vCard) {
    if (card.classList.contains('card-h')) {
      card.classList.remove('card-h');
    }
    card.classList.add('card-l');
    btnL.disabled = true;
    btnV.disabled = false;
    btnH.disabled = false;
  }
}
btnL.onclick = lDisplay;

//show
for (let button of btnHeaderCta) {
  button.addEventListener('click', (e) => {
    for (let content of cardBody) {
      if (
        content.getAttribute('data-card') ===
        button.getAttribute('data-card')
      ) {
        content.classList.remove('d-none');
        content.classList.add('d-flex');
      }
    }
  });
}

//hide
for (let button of btnClose) {
  button.addEventListener('click', (e) => {
    for (let content of cardBody) {
      if (
        content.getAttribute('data-card') ===
        button.getAttribute('data-card')
      ) {
        content.classList.add('d-none');
        content.classList.remove('d-flex');
      }
    }
  });
}

const aioColors = document.querySelectorAll('.clipboard');

aioColors.forEach(color => {
  color.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(color);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      const original = color.textContent;
      color.textContent = 'Copied!';
      color.classList.add('success');

      setTimeout(() => {
        color.textContent = original;
        color.classList.remove('success');
      }, 1200);
    } catch(e) {
      const errorMsg = document.querySelector('.error-msg');
      errorMsg.classList.add('show');

      setTimeout(() => {
        errorMsg.classList.remove('show');
      }, 1200);
    }
  });
});