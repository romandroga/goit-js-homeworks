"use strict";

let totalCounter = 0;
let boxSize = 30;
const boxWrapper = document.querySelector("#boxes");
const inputNumber = document.querySelector("input[type=number]");
const renderButton = document.querySelector("button[data-action=render]");
const destroyButton = document.querySelector("button[data-action=destroy]");

inputNumber.addEventListener("input", () => {
  totalCounter = +inputNumber.value;
});

renderButton.addEventListener("click", () => {
  const arr = [];
  for (let i = 0; i < totalCounter; i += 1) {
    const elem = document.createElement("div");
    elem.style.backgroundColor = `rgb(${getRandNumber(255)},
    ${getRandNumber(255)}, ${getRandNumber(255)})`;
    elem.style.width = `${boxSize}px`;
    elem.style.height = `${boxSize}px`;
    arr.push(elem);
    boxSize += 10;
  }
  boxWrapper.append(...arr);
});

destroyButton.addEventListener("click", () => {
  boxWrapper.innerHTML = "";
  inputNumber.value = "";
  boxSize = 30;
});

function getRandNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
