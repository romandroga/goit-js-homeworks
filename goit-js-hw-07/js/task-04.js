"use strict";

let counterValue = 0;
const decrementButton = document.querySelector("button[data-action=decrement]");
const incrementButton = document.querySelector("button[data-action=increment]");
const counter = document.querySelector("#value");

decrementButton.addEventListener("click", function decrement() {
  counter.textContent = counterValue -= 1;
});

incrementButton.addEventListener("click", function increment() {
  counter.textContent = counterValue += 1;
});
