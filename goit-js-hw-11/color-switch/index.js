"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector("body"),
  startButton: document.querySelector("button[data-action=start]"),
  stopButton: document.querySelector("button[data-action=stop]")
};

let timer;

refs.startButton.addEventListener("click", () => {
  timer = setInterval(changeBackgroundColor, 1000);
  refs.startButton.setAttribute("disabled", "disabled");
  console.dir(refs.startButton)
});

refs.stopButton.addEventListener("click", () => {
  clearInterval(timer);
  refs.body.style.backgroundColor = ''
  refs.startButton.removeAttribute("disabled");
});

function changeBackgroundColor() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}
