// const clipBoards = document.querySelectorAll(".clipboard");

// clipBoards.forEach((innerCopy) => {
//   innerCopy.addEventListener("click", () => {
//     const selection = window.getSelection();
//     const range = document.createRange();
//     range.selectNodeContents(innerCopy);
//     selection.removeAllRanges();
//     selection.addRange(range);

//     try {
//       document.execCommand("copy");
//       selection.removeAllRanges();

//       const original = innerCopy.textContent;
//       innerCopy.textContent = "Copied!";
//       innerCopy.classList.add("t-green");

//       setTimeout(() => {
//         innerCopy.textContent = original;
//         innerCopy.classList.remove("t-green");
//       }, 1200);
//     } catch (e) {
//       const errorMsg = document.querySelector(".error-msg");
//       errorMsg.classList.add("show");

//       setTimeout(() => {
//         errorMsg.classList.remove("show");
//       }, 1200);
//     }
//   });
// });


const buttonsClipboard = document.querySelectorAll('.clipboard-cta'); 
const clipBoards = document.querySelectorAll(".clipboard"); 


clipBoard  = (targetCode, currentBtn) => {
  targetCode.nextSibling.nextSibling; 
  
  let copy = targetCode.nextSibling.nextSibling;;  
  let range = document.createRange();  
  range.selectNode(copy);  
  window.getSelection().addRange(range);  

  try {  
    let successful = document.execCommand('copy');  
    let msg = successful ? (currentBtn.classList.add('btn-green'), currentBtn.innerHTML ='<ion-icon name="checkmark-outline"></ion-icon>') : (currentBtn.classList.add('btn-red'), currentBtn.innerHTML ='<ion-icon name="bug-outline"></ion-icon>');  
    //console.log('Copy email command was ' + msg);  
    msg

  } catch(err) {  
    console.log('Oops, unable to copy');  
  } 
 
  window.getSelection().removeAllRanges();  
}

//Call function clipboard
for(let btn of buttonsClipboard) {
  btn.addEventListener('click', function() {
    clipBoard(btn,btn);
  });
}
