// =====================
//TODO CREATE CALCULATOR PROGRAM
// =====================
//? v1
//* Add, Subtract, Multiply, Divide
//* Prompt you for First Number, Prompt Second Number, Prompt for Operation, Return Answer
//* Accepts input from the User
//* Only Does it Once

//? v2
//* Keep prompting until they say Quit

//? v3
//* Define Operations with Functions

// =====================
//! CALCULATOR SKELETON
// =====================
//// let result = 0;
//* We have a calculator that accepts two inputs
//* First, ask the user for the first number
// let number1 = prompt("Please enter first number: ");

//* Then, ask the user for the second number
// let number2 = prompt("Please enter second number: ");

//* Ask user which math operation to use
// let operation = prompt("Select operation (add, subtract, multiply, divide): ");

//* Compute math operation
//* if user enters THIS, do this
//* if (user enters this) {do this}
//* Print result
//* if user enters "add", do this
// if (operation === "add") {
//     console.log(number1 + number2);
// }
//* Print result
//* if user enters "subtract", do this
// if (operation === "subtract") {
//     console.log(number1 - number2);
// }
//* Print result
//* if user enters "multiply", do this
// if (operation === "multiply") {
//     console.log(number1 * number2);
// }
//* Print result
//* if user enters "divide", do this
// if (operation === "divide") {
//     console.log(number1 / number2);
// }

// =====================
//! ROUGH DRAFT
// =====================
//* My Code
// function functions() {
//     x = parseInt(prompt('Enter First Number'));
//     y = parseInt(prompt('Enter Second Number'));
//     operation = prompt('Select Operation: add, subtract, multiply, divide');
// }
// let x = parseInt(prompt('Enter First Number'));
// let y = parseInt(prompt('Enter Second Number'));
// let operation = prompt('Select Operation: add, subtract, multiply, divide');
// while (operation !== 'quit') {
//     if (operation === 'add') {
//         console.log(x + y);
//     } else if (operation === 'subtract') {
//         console.log(x - y);
//     } else if (operation === 'multiply') {
//         console.log(x * y);
//     } else if (operation === 'divide') {
//         console.log(x / y);
//     } else {
//         console.log('Invalid Input');
//     };
//     functions();
// } console.log('OK, QUIT!');

//* Scraps
// (!)Number.isNaN
// function functions() {
//     x = parseInt(prompt('Enter First Number'));
//     if (x == !Number.isNaN) {
//         y = (prompt('Enter Second Number'));
//         if (y == !Number.isNaN) {
//             operation = prompt('Select Operation: add, subtract, multiply, divide');
//         }
//     }
// }
// while (x !== 'quit' && x !== 'q', y !== 'quit' && y !== 'q') {}
// x = prompt('Enter First Number');
// y = prompt('Enter Second Number');
// operation = prompt('Select Operation: add, subtract, multiply, divide');
// function functions() {
//     x = parseInt(prompt('Enter First Number'));
//     y = parseInt(prompt('Enter Second Number'));
//     operation = prompt('Select Operation: add, subtract, multiply, divide');
// } functions();

// =====================
//! CALCULATOR FINAL
// =====================
function calculate() { // define function to call
    while (true) { // while loop
        function functions() { // define functions + functionality
            let x = parseInt(prompt('Enter First Number'));
            if (!Number.isNaN(x)) { // if x is not NaN, do this
                let y = parseInt(prompt('Enter Second Number'));
                if (!Number.isNaN(y)) { // if y is not NaN, do this
                    let operation = prompt('Select Operation: add, subtract, multiply, divide');
                    if (operation !== 'quit') { // if operation is not quit, do this
                        if (operation === 'add') {
                            function add() {
                                let sum = x + y;
                                console.log(sum);
                            } add();
                        } else if (operation === 'subtract') {
                            function subtract() {
                                let difference = x - y;
                                console.log(difference);
                            } subtract();
                        } else if (operation === 'multiply') {
                            function multiply() {
                                let product = x * y;
                                console.log(product);
                            } multiply();
                        } else if (operation === 'divide') {
                            function divide() {
                                let quotient = x / y;
                                console.log(quotient);
                            } divide();
                        } else { // selected operation
                            throw new Error('Invalid Input');
                        }
                    } if (operation === 'quit') { // operation quit
                        throw new Error('OK, QUIT!');
                    }
                } else { // y
                    throw new Error('NaN');
                }
            } else { // x
                throw new Error('NaN');
            }
        } functions(); // make sure functions() calls again
    }
}
calculate(); // run application
