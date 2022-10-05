"use strict";
const run = (number) => {
    return number;
};
// console.log(run(3534454))
// Void Return Type
function printHello() {
    console.log('Hello!');
}
//Parameters
function multiply(a, b) {
    return a * b;
}
//Optional Parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
//Named Parameters
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
//Default Parameters
function pow(value, exponent = 10) {
    return value ** exponent;
}
//Rest Parameters
function addN(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
console.log(negateFunction(45345));
