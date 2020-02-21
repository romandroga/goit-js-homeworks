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

function createNewElement(elem) {
  const newElement = document.createElement("li");
  newElement.textContent = elem;
  return newElement;
}

ingredientsList.append(
  createNewElement(ingredients[0]),
  createNewElement(ingredients[1]),
  createNewElement(ingredients[2]),
  createNewElement(ingredients[3]),
  createNewElement(ingredients[4]),
  createNewElement(ingredients[5])
);

console.log(ingredientsList);
