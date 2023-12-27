// Operations functions
let operation = {
  a: '',
  b: '',
  add: function (a, b) {return a + b},
  subtract: function(a, b) {return a - b},
  multiply: function(a, b) {return a * b},
  divide: function(a, b) {return a/b},
}
// function add(a, b) {return a + b};
// function subtract(a, b) {return a - b};
// function multiply(a, b) {return a * b};
// function divide(a, b) {return a/b};

// Variables to work on functions
let a = undefined;
let b = undefined;
let operator = undefined;

// Updates text in display
function displayText(text, selector){
let display = document.querySelector(selector);
display.textContent = (text);
}

// Get list of number elements
let numbers = document.querySelectorAll('.number');
numbers.forEach(function(element){
  element.addEventListener('click', numberClick);
});

// Handles number buttons clicks

let text = '';

function numberClick(event){

  let number = event.target.dataset.number;

  switch (number){
    case '1':
      text += '1';
      break;
    case '2':
      text += '2';
      break;
    case '3':
      text += '3';
      break;
    case '4':
      text += '4';
      break;
    case '5':
      text += '5';
      break;
    case '6':
      text += '6';
      break;
    case '7':
      text += '7';
      break;
    case '8':
      text += '8';
      break;
    case '9':
      text += '9';
      break;
    case '0':
      text += '0';
      break;
    case '.':
      text += '.';
      break;
  }
  displayText(text, '.display.text');
}

// Get list of operator elements
let operators = document.querySelectorAll('.operator');
operators.forEach(function(element){
  element.addEventListener('click', operatorClick);
});

// Records text as 

function operatorClick(event){
  operator = event.target.dataset.operator;
  let operatorText = '';

  if (operation.a === ''){
    operation.a = parseInt(text);
  }else if (operation.a != ''){
    operation.b = parseInt(text);
    // result();
  }

  switch(operator){
    case 'division':
      operator = divide;
      operatorText = '÷'
      break;

    case 'subtract':
      operator = subtract;
      operatorText = '-';
      break;
    
    case 'multiply':
      operator = multiply;
      operatorText = '×'
      break;
    
    case 'add':
      operator = add;
      operatorText = '+'
      break;
  }
  displayText(operatorText, '.display.operator')
  text = '';
  
}

// function result(operator){
//   let result = operation.operator();
//    displayText(result);
// }