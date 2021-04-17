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
function calculate(x, y, operation) {
    if (operation === 'add') {
        add(x, y);
    } else if (operation === 'subtract') {
        subtract(x, y);
    } else if (operation === 'multiply') {
        multiply(x, y);
    } else if (operation === 'divide') {
        divide(x, y);
    } else { // error check operation
        throw new Error('Invalid Input');
    }
}

//? variables
let operation = ''; // declare operation variable as empty string
while (operation !== 'quit') {
    // currently no error checking on x, y variable declarations
    let x = parseInt(prompt('Enter First Number'));
    let y = parseInt(prompt('Enter Second Number'));
    operation = prompt('Select Operation: add, subtract, multiply, divide');
    if (operation !== 'quit') {
        calculate(x, y, operation); // run application using defined parameters
    }
}
console.log('OK, QUIT');


