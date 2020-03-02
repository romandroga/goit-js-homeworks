"use strict";

const inputForm = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputForm.addEventListener("input", showName);

function showName(event) {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    output.textContent = "незнакомец";
  }
}
