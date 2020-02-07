"use strict";
import users from "./users.js";
console.log(users);
// Task-01///////////////////////

const getUserNames = users => {
  return users.map(elem => elem.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Task-02/////////////////////////

const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users.filter(elem => elem.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Task-03////////////////////
const getUsersWithGender = (users, gender) => {
  const arr = [];
  users.forEach(elem => {
    if (elem.gender === gender) {
      arr.push(elem.name);
    }
  });
  return arr;
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Task-04/////////////////////
const getInactiveUsers = users => {
  return users.filter(elem => !elem.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//Task-05//////////////////////
const getUserWithEmail = (users, email) => {
  return users.find(elem => elem.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
//Task-06//////////////////////
const getUsersWithAge = (users, min, max) => {
  return users.filter(elem => elem.age >= min && elem.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
//Task-07//////////////////////
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
//Task-08//////////////////////
const getUsersWithFriend = (users, friendName) => {
  const arr = [];
  users.forEach(elem => {
    if (elem.friends.includes(friendName)) {
      arr.push(elem.name);
    }
  });
  return arr;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
//Task-09//////////////////////
const getNamesSortedByFriendsCount = users => {};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
