const clipBoards = document.querySelectorAll(".clipboard");

clipBoards.forEach((innerCopy) => {
  innerCopy.addEventListener("click", () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(innerCopy);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand("copy");
      selection.removeAllRanges();

      const original = innerCopy.textContent;
      innerCopy.textContent = " Copied!";
      innerCopy.classList.add("success");

      setTimeout(() => {
        innerCopy.textContent = original;
        innerCopy.classList.remove("success");
      }, 1200);
    } catch (e) {
      const errorMsg = document.querySelector(".error-msg");
      errorMsg.classList.add("show");

      setTimeout(() => {
        errorMsg.classList.remove("show");
      }, 1200);
    }
  });
});
