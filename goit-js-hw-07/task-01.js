"use strict";

const categories = document.querySelector("#categories");
const categoriesItem = document.querySelector(".item");
const categoriesItemList = document.querySelector(".item ul");

console.log(`В списке ${categories.children.length} категории`);
console.log(`Категория: ${categoriesItem.firstElementChild.textContent}
Количество элементов: ${categoriesItemList.children.length}`);
