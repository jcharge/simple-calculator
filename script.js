// Global variables

let a;
let b;
let pickedOperator = '';
// Operator functions + - * /

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

// operate function that calls on an operator function based on input

function operate(x, y, operator) {
    switch (operator) {
        case 'add':
            return add(x, y);

        case 'subtract':
            return subtract(x, y);

        case 'multiply':
            return multiply(x, y);
        
        case 'divide':
            return divide(x, y);

        default: 
            alert('Use numbers and declare operator');

    };
};

// connecting the number pad to the display

let display = document.querySelector('#display-number');

let one = document.querySelector('#number-1');
let two = document.querySelector('#number-2');
let three = document.querySelector('#number-3');
let four = document.querySelector('#number-4');
let five = document.querySelector('#number-5');
let six = document.querySelector('#number-6');
let seven = document.querySelector('#number-7');
let eight = document.querySelector('#number-8');
let nine = document.querySelector('#number-9');
let zero = document.querySelector('#number-0');

let equals = document.querySelector('#input-equals');
let decimal = document.querySelector('#input-decimal');
let backspace = document.querySelector('#input-backspace');
let clear = document.querySelector('#input-clear');

one.addEventListener('click', function(e) {
    display.textContent += '1';
});
two.addEventListener('click', function(e) {
    display.textContent += '2';
});
three.addEventListener('click', function(e) {
    display.textContent += '3';
});
four.addEventListener('click', function(e) {
    display.textContent += '4';
});
five.addEventListener('click', function(e) {
    display.textContent += '5';
});
six.addEventListener('click', function(e) {
    display.textContent += '6';
});
seven.addEventListener('click', function(e) {
    display.textContent += '7';
});
eight.addEventListener('click', function(e) {
    display.textContent += '8';
});
nine.addEventListener('click', function(e) {
    display.textContent += '9';
});
zero.addEventListener('click', function(e) {
    display.textContent += '0';
});
decimal.addEventListener('click', function(e) {
    display.textContent += '.';
});

backspace.addEventListener('click', function(e) {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});

clear.addEventListener('click', function(e) {
    display.textContent = display.textContent.replace(/[0-9]/g, '');
    display.textContent = display.textContent.replace(/./g, '');
    display.textContent = display.textContent.replace(/[a-z]/g, '');
    pickedOperator = '';
});

// Operator events

let functionBtn = document.querySelectorAll('.function-button');
let addBtn = document.querySelector('#input-add');
let subtractBtn = document.querySelector('#input-subtract');
let multiplyBtn = document.querySelector('#input-multiply');
let divideBtn = document.querySelector('#input-divide');

addBtn.addEventListener('click', e => {
    pickedOperator = 'add';
    storeFirstNumber();
});
subtractBtn.addEventListener('click', e => {
    pickedOperator = 'subtract';
    storeFirstNumber();
});
multiplyBtn.addEventListener('click', e => {
    pickedOperator = 'multiply'
    storeFirstNumber();
});
divideBtn.addEventListener('click', e => {
    pickedOperator = 'divide'
    storeFirstNumber();
});
functionBtn.forEach(button => {
    button.addEventListener('click', e => {
        display.textContent = display.textContent.replace(/[0-9]/g, '');
        display.textContent = display.textContent.replace(/./g, '');
        display.textContent = display.textContent.replace(/[a-z]/g, '');
    })
});

// Equals event that stores the second number and runs the selected operation

equals.addEventListener('click', e => {
    storeSecondNumber();
    display.textContent = display.textContent.replace(/[0-9]/g, '');
    display.textContent = display.textContent.replace(/./g, '');
    display.textContent = display.textContent.replace(/[a-z]/g, '');
    display.textContent = operate(a, b, pickedOperator)
})
// a functions that store the displayed numbers in a variable

function storeFirstNumber() {
    a = Number(display.textContent);
}

function storeSecondNumber() {
    b = Number(display.textContent);
};
