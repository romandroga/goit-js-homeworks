"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const newTransaction = {
      amount,
      type,
      id: account.transactions.length + 1
    };
    return newTransaction;
  },

  deposit(amount) {
    account.transactions.push(account.createTransaction(amount, "deposit"));
    account.balance += amount;
  },

  withdraw(amount) {
    if (amount > account.balance) {
      return console.log(
        "Снятие такой суммы не возможно, недостаточно средств"
      );
    }
    account.transactions.push(account.createTransaction(amount, "withdraw"));
    account.balance -= amount;
  },

  getBalance() {
    return account.balance;
  },

  getTransactionDetails(id) {
    for (let elem in account.transactions) {
      if (account.transactions[elem].id === id) {
        return account.transactions[elem];
      }
    }
  },

  getTransactionTotal(type) {
    let totalSum = 0;
    for (let elem of account.transactions) {
      for (let key in elem) {
        if (elem[key] === type) {
          totalSum += elem.amount;
        }
      }
    }
    return totalSum;
  }
};

account.deposit(500);
account.withdraw(100);
account.deposit(100);
account.withdraw(100);
console.log(account.balance);
console.log(account.transactions);
console.log(account.getTransactionTotal("withdraw"));
console.log(account.getTransactionDetails(2));
