"use strict";

const inputForm = document.querySelector("#validation-input");
inputForm.addEventListener("blur", checkValidity);

function checkValidity(event) {
  event.currentTarget.value.length === +inputForm.getAttribute("data-length")
    ? inputForm.classList.add("valid")
    : inputForm.classList.add("invalid");
}
