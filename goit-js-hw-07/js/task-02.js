"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsList = document.querySelector("#ingredients");

createNewElements(ingredients);

function createNewElements(array) {
  const arr = []
  array.forEach(elem => {
    const newElement = document.createElement("li");
    newElement.textContent = elem;
    arr.push(newElement)
  });
  ingredientsList.append(...arr);
}
