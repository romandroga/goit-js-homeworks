"use strict";

const findLongestWord = function(string) {
  const arr = string.split(" ");
  let mostLongeWord = arr[0];
  for (let word of arr) {
    if (word.length > mostLongeWord.length) {
      mostLongeWord = word;
    }
  }
  return mostLongeWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
