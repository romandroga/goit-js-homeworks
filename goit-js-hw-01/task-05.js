"use strict";

const deliveryAdress = prompt("Введите страну доставки: ");
const deliveryToChina = 100;
const deliveryToChile = 250;
const deliveryToAustralia = 170;
const deliveryToIndia = 80;
const deliveryToJamaica = 120;

if (deliveryAdress !== null) {
  switch (deliveryAdress.toLowerCase()) {
    case "китай":
      console.log(
        `Доставка в ${deliveryAdress} будет стоить ${deliveryToChina} кредитов`
      );
      break;

    case "чили":
      console.log(
        `Доставка в ${deliveryAdress} будет стоить ${deliveryToChile} кредитов`
      );
      break;

    case "австралия":
      console.log(
        `Доставка в ${deliveryAdress} будет стоить ${deliveryToAustralia} кредитов`
      );
      break;

    case "индия":
      console.log(
        `Доставка в ${deliveryAdress} будет стоить ${deliveryToIndia} кредитов`
      );
      break;

    case "ямайка":
      console.log(
        `Доставка в ${deliveryAdress} будет стоить ${deliveryToJamaica} кредитов`
      );
      break;
    default:
      console.log("В вашей стране доставка не доступна");
  }
}
