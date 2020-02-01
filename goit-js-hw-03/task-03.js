"use strict";

const findBestEmployee = function(employees) {
  let name;
  let tasks = 0;
  for (let elem in employees) {
    if (employees[elem] > tasks) {
      name = elem;
      tasks = employees[elem];
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
);
