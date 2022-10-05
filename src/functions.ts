const run = (number: number): number => {
    return number
}

// console.log(run(3534454))


// Void Return Type

function printHello(): void {
    console.log('Hello!');
}

//Parameters
function multiply(a: number, b: number) {
    return a * b;
}

//Optional Parameters

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

//Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

//Default Parameters
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}

//Rest Parameters
function addN(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

// Type Alias
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(45345))



