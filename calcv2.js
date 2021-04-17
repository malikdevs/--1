// =====================
//! CALCULATOR FINAL (v2)
// =====================
//* Eliminate function nesting
//* Divide the labor

//? operations
function add(x, y) {
    let sum = x + y;
    console.log(sum);
}
function subtract(x, y) {
    let difference = x - y;
    console.log(difference);
}
function multiply(x, y) {
    let product = x * y;
    console.log(product);
}
function divide(x, y) {
    let quotient = x / y;
    console.log(quotient);
}

//? calculations
function calculate(x, y, operation) { // define
    if (operation === 'add') {
        add(x, y);
    } else if (operation === 'subtract') {
        subtract(x, y);
    } else if (operation === 'multiply') {
        multiply(x, y);
    } else if (operation === 'divide') {
        divide(x, y);
    } else { // selected operation
        throw new Error('Invalid Input');
    }
}

//? variables
let operation = ''; // clear operation
while (operation !== 'quit') { // while loop
    let x = parseInt(prompt('Enter First Number'));
    // if (Number.isNaN(x)) { // if x is NaN
    //     throw new Error('NaN');
    // }
    let y = parseInt(prompt('Enter Second Number'));
    // if (Number.isNaN(y)) { // if y is NaN
    //     throw new Error('NaN');
    // }
    operation = prompt('Select Operation: add, subtract, multiply, divide');
    if (operation !== 'quit') {
        calculate(x, y, operation); // run application
    }
}
console.log('OK, QUIT');


