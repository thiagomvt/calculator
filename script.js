// Operations functions
function add(a, b) {return a + b};
function subtract(a, b) {return a - b};
function multiply(a, b) {return a * b};
function divide(a, b) {return a/b};

// Variables to work on functions
let a = undefined;
let b = undefined;
let operator = undefined;

// Updates text in display
function displayText(text){
let display = document.querySelector('#display');
display.textContent = (text);
}

// Get list of number buttons
let numbers = document.querySelectorAll('.number');
numbers.forEach(function(element){
  element.addEventListener('click', handleClick);
});

// Handles number buttons clicks

let text = '';

function handleClick(event){

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
    case '0':
      text += '0';
      break;
    case '.':
      text += '.';
      break;
  }
  displayText(text);
}