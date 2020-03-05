"use strict";

const inputForm = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputForm.addEventListener("input", showName);

function showName(event) {
  if (event.currentTarget.value === "") {
    output.textContent = "незнакомец";
    return;
  }
  output.textContent = event.currentTarget.value;
}
