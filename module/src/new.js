"use strict";
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
const numbers = [1, 2, 3, 4, 5];
const total = sumArray(numbers);
console.log(total); // Output: 15
