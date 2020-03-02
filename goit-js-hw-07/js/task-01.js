"use strict";

const categoriesList = document.querySelector("#categories");
const categoriesListItem = document.querySelectorAll(".item");

console.log(`В списке ${categoriesList.children.length} категорий`);

categoriesListItem.forEach(elem => {
  console.log(
    `Категория: ${elem.firstElementChild.textContent}, количество элементов: ${elem.lastElementChild.children.length}`
  );
});
