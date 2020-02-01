"use strict";

const checkForSpam = function(message) {
  const newStr = message.toString().toLowerCase();
  return newStr.includes("sale") || newStr.includes("spam");
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
