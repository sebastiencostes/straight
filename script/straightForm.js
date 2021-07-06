const formExample = document.querySelector("#formExample");
const inputExample = formExample.querySelectorAll(".form-input");
const inputContainerExample = formExample.querySelectorAll(
  ".form-input-container"
);
const btnSubmit = formExample.querySelector("#submitExample");
const arrayForms = [
  {
    color: "yellow",
  },
  {
    color: "red",
  },
  {
    color: "blue",
  },
  {
    color: "purple",
  },
  {
    color: "green",
  },
  {
    color: "orange",
  },
  {
    color: "turquoise",
  },
  {
    color: "pink",
  },
  {
    color: "brown",
  },
  {
    color: "grey",
  },
  {
    color: "navy",
  },
  {
    color: "black",
  },
];
const arrayCheckboxes = [
  {
    color: "yellow",
  },
  {
    color: "red",
  },
  {
    color: "blue",
  },
  {
    color: "purple",
  },
  {
    color: "green",
  },
  {
    color: "orange",
  },
  {
    color: "turquoise",
  },
  {
    color: "pink",
  },
  {
    color: "brown",
  },
  {
    color: "navy",
  },
  {
    color: "black",
  },
];
const formContainer = document.querySelector("#arrayForms");
const inputContainer = document.querySelector("#arrayInputs");
const inputIconContainer = document.querySelector("#arrayIconInputs");
const checkboxContainer = document.querySelector("#arrayCheckboxes");
const radioboxContainer = document.querySelector("#arrayRadios");
const switchContainer = document.querySelector("#arraySwitches");

//Creating form
for (let i = 0; i < arrayForms.length; i++) {
  formContainer.innerHTML += `<form class="form form-${arrayForms[i].color}" action="" method="">
    <fieldset class="form-title-container">
        <legend class="form-title">form-${arrayForms[i].color}</legend>
    </fieldset>
    <div class="form-body g-col g-col-l-2">
        <div>
            <div class="m-b-1">
                <label class="form-label" for="a-${i}">Firstname</label>
                <div class="form-input-container">
                    <span class="form-icon">
                        <ion-icon class="input-icon" name="person-outline" />
                    </span>
                    <input id="a-${i}" class="form-input" type="text"  minlength="2" maxlength="20" placeholder="your firstname" required>
                </div>
            </div>
            <div class="m-b-1">
                <label class="form-label" for="b-${i}">Lastname</label>
                <div class="form-input-container">
                    <span class="form-icon">
                        <ion-icon class="input-icon" name="person-outline" />
                    </span>
                    <input id="b-${i}" class="form-input form-lastname" type="text"  minlength="1" maxlength="40" placeholder="your lastname" required>
                </div>
            </div>
            <div class="m-b-1">
                <label class="form-label" for="c-${i}">Phone number</label>
                <div class="form-input-container">
                    <span class="form-icon">
                        <ion-icon class="input-icon" name="call-outline" />
                    </span>
                    <input id="c-${i}" class="form-input" type="tel"  pattern="[0-9]+" name="tel" minlength="10" maxlength="14" placeholder="your phone number" required>
                </div>
            </div>
            <div class="m-b-1">
                <label class="form-label" for="d-${i}">Type email</label>
                <div class="form-input-container">
                    <span class="form-icon">
                        <ion-icon class="input-icon" name="at-outline" />
                    </span>
                    <input id="d-${i}" class="form-input" type="email" minlength="" maxlength="" placeholder="your email" required>
                </div>
            </div>
        </div>
        <div class="m-b-4">
            <div class="h-prc-100">
                <label class="form-label" for="e-${i}">Subject</label>
                <div class="form-input-container textarea-container">
                    <textarea id="e-${i}" class="form-input" name="textarea" placeholder="Your text here..."></textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="g-col g-col-m-2">
        <div class="d-flex i-center j-between m-t-3">
            <div>
                <input class="switch check-turquoise" id="f-${i}" type="checkbox">
                <label for="f-${i}">accept</label>
            </div>
            <div>
                <input class="switch check-turquoise" id="g-${i}" type="checkbox">
                <label for="g-${i}">accept</label>
            </div>
        </div>
        <div class="form-input-container m-t-2">
            <input class="form-input" type="submit" id="sub-a${i}" value="submit">
        </div>
    </div>
    </form>`;
}
//Creating input-container
for (let i = 0; i < arrayForms.length; i++) {
  inputContainer.innerHTML += `<div>
    <label class="form-label" for="h-${i}">input-container-${arrayForms[i].color}</label>
    <div class="form-input-container input-container-${arrayForms[i].color}">
        <span class="form-icon">
            <ion-icon class="input-icon" name="pencil-outline" />
        </span>
        <input id="h-${i}" class="form-input" type="text" name="h-${i}" required minlength="1" maxlength="8"
            size="10" placeholder="Your text here...">
    </div>
</div>`;
}

//Creating input-icon-container
for (let i = 0; i < arrayForms.length; i++) {
  inputIconContainer.innerHTML += `<div>
      <label class="form-label" for="i-${i}">input-icon-container-${arrayForms[i].color}</label>
      <div class="form-input-container input-icon-container-${arrayForms[i].color}">
          <span class="form-icon">
              <ion-icon class="input-icon" name="pencil-outline" />
          </span>
          <input id="i-${i}" class="form-input" type="text" name="i-${i}" required minlength="1" maxlength="8"
              size="10" placeholder="Your text here...">
      </div>
  </div>`;
}

//Creating checkboxes input
for (let i = 0; i < arrayCheckboxes.length; i++) {
  checkboxContainer.innerHTML += `<div class="d-flex i-center">
    <input id="j-${i}" class="check-${arrayCheckboxes[i].color}" type="checkbox" checked>
    <label for="j-${i}">check-${arrayCheckboxes[i].color}</label>
</div>`;
}

//Creating radios input
for (let i = 0; i < arrayCheckboxes.length; i++) {
  radioboxContainer.innerHTML += `<div class="d-flex i-center">
    <input id="k-${i}" class="radio-${arrayCheckboxes[i].color}" type="radio" name="k-${i}" value="k-${i}" checked>
    <label for="k-${i}">radio-${arrayCheckboxes[i].color}</label>
</div>`;
}

//Creating switches input
for (let i = 0; i < arrayCheckboxes.length; i++) {
  switchContainer.innerHTML += `<div class="d-flex i-center">
    <input id="l-${i}" type="checkbox" class="switch check-${arrayCheckboxes[i].color}" checked>
    <label for="l-${i}">switch check-${arrayCheckboxes[i].color}</label>
</div>`;
}

//set Attr
for (let i = 0; i < inputContainerExample.length; i++) {
  inputContainerExample[i].setAttribute("data-form", i);
}
for (let i = 0; i < inputExample.length; i++) {
  inputExample[i].setAttribute("data-form", i);
}

//Illustrative function for form examples
straightForm = () => {
  //Focus alert on input
  for (let inputContainer of inputContainerExample) {
    for (let input of inputExample) {
      if (input.value === "" || input.value.length === 0) {
        inputContainer.classList.add("input-icon-container-red", "b-red");
        btnSubmit.parentNode.classList.add("input-container-grey");
        btnSubmit.parentNode.classList.remove("b-red");
        btnSubmit.disabled = true;
      }
      input.addEventListener("change", (e) => {
        //get current data attr
        let currentAttrInput = e.currentTarget.getAttribute("data-form");
        //get parent current data attr
        let parentAttrInput =
          e.currentTarget.parentNode.getAttribute("data-form");
        //get parent current input
        let parentInput = e.currentTarget.parentNode;
        //compare data attr between prent & child
        if (currentAttrInput === parentAttrInput)
          parentInput.classList.remove("input-icon-container-red");
        parentInput.classList.add("input-icon-container-turquoise", "b-green");
        btnSubmit.parentNode.classList.remove("input-container-grey", "b-red");
        btnSubmit.parentNode.classList.add("input-container-turquoise");
        btnSubmit.disabled = false;
      });
    }
  }
};
btnSubmit.addEventListener("click", () => {
  straightForm();
});
