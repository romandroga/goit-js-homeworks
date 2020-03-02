"use strict";

let counterValue = 0;
const decrementButton = document.querySelector("button[data-action=decrement]");
const incrementButton = document.querySelector("button[data-action=increment]");
const counter = document.querySelector("#value");

decrementButton.addEventListener("click", function decrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
});

incrementButton.addEventListener("click", function increment() {
  counterValue += 1;
  counter.textContent = counterValue;
});
