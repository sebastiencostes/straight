const buttonsClipboard = document.querySelectorAll(".clipboard-cta");
const clipBoards = document.querySelectorAll(".clipboard");
clipBoard = (targetCode, currentBtn) => {
  targetCode.nextSibling.nextSibling;

  let copy = targetCode.nextSibling.nextSibling;
  let range = document.createRange();
  range.selectNode(copy);
  window.getSelection().addRange(range);

  try {
    let successful = document.execCommand("copy");
    let msg = successful
      ? (currentBtn.classList.add("btn-green"),
        (currentBtn.innerHTML =
          '<ion-icon name="checkmark-outline"></ion-icon>'))
      : (currentBtn.classList.add("btn-red"),
        (currentBtn.innerHTML = '<ion-icon name="bug-outline"></ion-icon>'));
    msg;
    //remove green style from success
    setTimeout(() => {
      currentBtn.classList.remove("btn-green");
      currentBtn.innerHTML = '<ion-icon name="clipboard-outline"></ion-icon>';
    }, 1800);
  } catch (err) {
    //remove red style from error
    setTimeout(() => {
      currentBtn.classList.remove("btn-red");
      currentBtn.innerHTML = '<ion-icon name="clipboard-outline"></ion-icon>';
    }, 1800);
  }

  window.getSelection().removeAllRanges();
};

//Call function clipboard
for (let btn of buttonsClipboard) {
  btn.addEventListener("click", function () {
    clipBoard(btn, btn);
  });
}
