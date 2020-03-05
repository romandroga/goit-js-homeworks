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
  array.forEach(elem => {
    const newElement = document.createElement("li");
    newElement.textContent = elem;
    ingredientsList.append(newElement);
  });
}
