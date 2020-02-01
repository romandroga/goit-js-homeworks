"use strict";

let credits = 23580;
const pricePerDroid = 3000;

let numberOfDroids = prompt("Введите желаемое колличество дроидов: ");

if (numberOfDroids === null) {
  console.log("Отменено пользователем!");
  numberOfDroids = "0";
}

const totalPrice = numberOfDroids * 3000;

if (credits < totalPrice) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
}
