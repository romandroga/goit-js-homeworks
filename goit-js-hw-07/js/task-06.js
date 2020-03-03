"use strict";

const inputForm = document.querySelector("#validation-input");
inputForm.addEventListener("input", checkValidity);

function checkValidity(e) {
  if (e.currentTarget.value.length === +inputForm.getAttribute("data-length")) {
    if (this.classList.contains("invalid")) {
      this.classList.remove("invalid");
    }
    this.classList.add("valid");
  } else {
    inputForm.classList.add("invalid");
  }
}
