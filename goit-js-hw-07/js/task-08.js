"use strict";

let totalCounter = 0;
let boxSize = 30;
const boxWrapper = document.querySelector("#boxes");
const inputNumber = document.querySelector("input[type=number]");
const renderButton = document.querySelector("button[data-action=render]");
const destroyButton = document.querySelector("button[data-action=destroy]");

inputNumber.addEventListener("click", () => {
  totalCounter = +inputNumber.value;
});

renderButton.addEventListener("click", () => {
  console.log(`Нужно создать ${totalCounter} дивов`);

  for (let i = 0; i < totalCounter; i += 1) {
    const elem = document.createElement("div");
    elem.style.backgroundColor = `rgb(${getRandNumber(255)},
    ${getRandNumber(255)}, ${getRandNumber(255)})`;
    elem.style.width = `${boxSize}px`;
    elem.style.height = `${boxSize}px`;
    boxWrapper.appendChild(elem);
    boxSize += 10;
  }
});

destroyButton.addEventListener("click", () => {
  boxWrapper.innerHTML = "";
});

function getRandNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
