"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];
const refs = {
  body: document.querySelector("body"),
  startButton: document.querySelector("button[data-action=start]"),
  stopButton: document.querySelector("button[data-action=stop]")
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timer;

refs.startButton.addEventListener("click", () => {
  timer = setInterval(changeBackgroundColor, 1000);
  refs.startButton.disabled = true;
});

refs.stopButton.addEventListener("click", () => {
  clearInterval(timer);
  refs.startButton.disabled = false;
});

function changeBackgroundColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
