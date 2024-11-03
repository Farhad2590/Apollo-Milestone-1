"use strict";
// learning functions
//Normal Function
//Arrow Function
function add(num1, num2) {
    return num1 + num2;
}
add(5, 6);
const addArrow = (num1, num2) => num1 + num2;
const poorUser = {
    name: "farhad",
    balance: 0,
    addBalance(balance) {
        return `My New Balance is ${this.balance + balance}`;
    }
};
const arr = [1, 4, 10];
const newArray = arr.map((element) => element * element);
