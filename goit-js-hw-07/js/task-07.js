"use strict";

const sizeControl = document.querySelector("#font-size-control");
const showText = document.querySelector("#text");

sizeControl.addEventListener("input", changeFontSize);

function changeFontSize() {
  showText.style.fontSize = `${sizeControl.value}px`;
}
