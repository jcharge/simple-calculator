// Global variables

let a;
let b;
let pickedOperator = '';
let numberPicked = '';
// Operator functions + - * /

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => {
    if (y === 0) {
        return 'Quit trying to be smart';
    } else {
        return x / y};
    };

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
    numberPicked = '1';
    checkNumberStage();
});
two.addEventListener('click', function(e) {
    numberPicked = '2';
    checkNumberStage();
});
three.addEventListener('click', function(e) {
    numberPicked = '3';
    checkNumberStage();
});
four.addEventListener('click', function(e) {
    numberPicked = '4';
    checkNumberStage();
});
five.addEventListener('click', function(e) {
    numberPicked = '5';
    checkNumberStage();
});
six.addEventListener('click', function(e) {
    numberPicked = '6';
    checkNumberStage();
});
seven.addEventListener('click', function(e) {
    numberPicked = '7';
    checkNumberStage();
});
eight.addEventListener('click', function(e) {
    numberPicked = '8';
    checkNumberStage();
});
nine.addEventListener('click', function(e) {
    numberPicked = '9';
    checkNumberStage();
});
zero.addEventListener('click', function(e) {
    numberPicked = '0';
    checkNumberStage();
});
decimal.addEventListener('click', function(e) {    
        if (a !== undefined && b !== undefined) {
            storeFirstNumber();
            clearNumbers();
            display.textContent += '.';
            b = undefined;
        } else if (display.textContent.indexOf('.') > -1) {
            display.textContent += '';
        } else if (display.textContent.length >= 16) {
            alert(`Can't enter more than 16 digits`);
        }  else {
            display.textContent += '.';
        }
});

backspace.addEventListener('click', function(e) {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});

clear.addEventListener('click', function(e) {
    clearNumbers()
    pickedOperator = '';
    a = undefined;
    b = undefined;
});

// a function the clears the numbers on the 'display'
function clearNumbers() {
    display.textContent = display.textContent.replace(/[0-9]/g, '');
    display.textContent = display.textContent.replace(/./g, '');
    display.textContent = display.textContent.replace(/[a-z]/g, '')
}

// Operator/equals events

let OperatorBtn = document.querySelectorAll('.Operator-button');
let addBtn = document.querySelector('#input-add');
let subtractBtn = document.querySelector('#input-subtract');
let multiplyBtn = document.querySelector('#input-multiply');
let divideBtn = document.querySelector('#input-divide');

addBtn.addEventListener('click', e => {
    stringOfOperations();
    pickedOperator = 'add';
});
subtractBtn.addEventListener('click', e => {
    stringOfOperations();
    pickedOperator = 'subtract';
});
multiplyBtn.addEventListener('click', e => {
    stringOfOperations();
    pickedOperator = 'multiply';
});
divideBtn.addEventListener('click', e => {
    stringOfOperations();
    pickedOperator = 'divide';
});
OperatorBtn.forEach(button => {
    button.addEventListener('click', e => {
        
    })
});

// a function that allows a string of functions to be used
// for ex 12 + 7 - 5 x 3 will come out as 42

function stringOfOperations() {
    if (a === undefined) {
        storeFirstNumber();
        clearNumbers();
    } else if (a !== undefined) {
        storeSecondNumber();
        clearNumbers();
        display.textContent = operate(a, b, pickedOperator)
    }
}
// Equals event that stores the second number and runs the selected operation

equals.addEventListener('click', e => {
    storeSecondNumber();
    clearNumbers();
    display.textContent = operate(a, b, pickedOperator);
})

// a button that makes the number negative or positive
let negativeBtn = document.querySelector('#input-negative');

negativeBtn.addEventListener('click', () => {
    if (display.textContent.charAt(0) == '-') {
        display.textContent = display.textContent.replace(/-/g, '')
    } else {
        display.textContent = '-' + display.textContent;
    }
})
// a functions that store the displayed numbers in a variable

function storeFirstNumber() {
    a = Number(display.textContent);
}

function storeSecondNumber() {
    b = Number(display.textContent);
};

// a function to keep the number length within the display and keeps the
// user from inputting a bunch of zeroes as the first numbers
// and a function for the number buttons to replace the displayed number
// in the event the user uses multiple functions rather than a function then equal

function checkNumberStage() {
    if (a !== undefined && b !== undefined) {
        storeFirstNumber();
        clearNumbers();
        display.textContent += `${numberPicked}`;
        b = undefined;
    } else if (display.textContent.indexOf('0') == 0 && display.textContent.length == 1) {
        display.textContent = display.textContent.replace('0', `${numberPicked}`);
    } else if (display.textContent.length >= 16) {
        alert(`Can't enter more than 16 digits`);
    }  else {
        display.textContent += `${numberPicked}`;
    }
}

// Animations for the buttons
let buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('button-animation');
    });
    button.addEventListener('transitionend', transitionEnd)
});

//transition remove function

function transitionEnd(e) {
    if(e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('button-animation')
}

/* function pickANumber() {
    if (a !== undefined && b !== undefined) {
        storeFirstNumber();
        clearNumbers();
        display.textContent += `${numberPicked}`;
        b = undefined;
    }
} */