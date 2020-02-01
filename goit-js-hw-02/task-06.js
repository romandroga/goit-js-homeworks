"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число: ");
  if (input !== null) {
    if (Number.isNaN(Number(input))) {
      alert("Введено не число, попробуйте ещё раз");
      continue;
    }
    numbers.push(+input);
  }
} while (input !== null);
if (numbers.length) {
  for (let num of numbers) {
    total += num;
  }
}
console.log(`Сумма чисел массива равна:  ${total}`);
