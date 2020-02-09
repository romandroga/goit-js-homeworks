"use strict";
import users from "./users.js";

// // Task-01///////////////////////

const getUserNames = users => {
  return users.map(elem => elem.name);
};

console.log(getUserNames(users));
// //Task-02/////////////////////////

const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users.filter(elem => elem.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));

// //Task-03////////////////////
const getUsersWithGender = (users, gender) => {
  const arr = [];
  users.forEach(elem => {
    if (elem.gender === gender) {
      arr.push(elem.name);
    }
  });
  return arr;
};

console.log(getUsersWithGender(users, "male"));

// //Task-04/////////////////////
const getInactiveUsers = users => {
  return users.filter(elem => !elem.isActive);
};

console.log(getInactiveUsers(users));
// //Task-05//////////////////////
const getUserWithEmail = (users, email) => {
  return users.find(elem => elem.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// //Task-06//////////////////////
const getUsersWithAge = (users, min, max) => {
  return users.filter(elem => elem.age >= min && elem.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));
// //Task-07//////////////////////
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users));
// //Task-08//////////////////////
const getUsersWithFriend = (users, friendName) => {
  const arr = [];
  users.forEach(elem => {
    if (elem.friends.includes(friendName)) {
      arr.push(elem.name);
    }
  });
  return arr;
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
//Task-09//////////////////////
const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => {
      a.friends.length - b.friends.length;
    })
    .map(elem => elem.name);
};

console.log(getNamesSortedByFriendsCount(users));
//Task-10////////////////////////////
const getSortedUniqueSkills = users => {
  const allSkills = users.flatMap(elem => elem.skills);
  return allSkills.filter((elem, index) => index === allSkills.indexOf(elem));
};
console.log(getSortedUniqueSkills(users));
