let a = undefined;
let b = undefined;
let result = undefined;
let number = '';
let operator = undefined;
let operatorSymbol = ''; 

// Displays content on calculator
function display(input, selector){
let display = document.querySelector(selector);
display.textContent = (input);
}

// Handles buttons clicks

let buttons = document.querySelector('#container2');
buttons.addEventListener('click', (event) => {
  let button = event.target

  switch (button.id){
    case 'one':
    case 'two':
    case 'three':
    case 'four':
    case 'five':
    case 'six':
    case 'seven':
    case 'eight':
    case 'nine':
    case 'zero':
      number += button.textContent;
      display(number, '.display.number');
      break
    
    case 'float':
      if (number === ''){
        number += '0.';
        display(number, '.display.number');
        break;
      }
      if (!number.includes('.')){
        number += '.';
        display(number, '.display.number');
        break;

      }
 
    case 'ac':
      number = '';
      operator = undefined;
      operatorSymbol = '';
      display(operatorSymbol, '.display.operator');
      display(number, '.display.number')
      a = undefined;
      b = undefined;
      result = undefined;
      break;

    case 'equal':
      b = parseFloat(number);
      operate();
      operatorSymbol = '';
      break;

    case 'invert':
      number =  String(-(parseFloat(number)));
      display(number, '.display.number');
      break;
    
    case 'percent':
    case 'division':
    case 'multiply':
    case 'minus':
    case 'sum':
      operator = button.textContent;
      display(operator, '.display.operator');
  }
})

// Get list of operator elements
let operators = document.querySelectorAll('.operator');
operators.forEach(function(element){
  element.addEventListener('click', operatorClick);
});


function operatorClick(event){

  operator = event.target.dataset.operator;

  if (a === undefined){
    a = parseFloat(number);
    number = '';

  } else if (a != undefined && b === undefined ){
    b = parseFloat(number);
    operate();
    number = '';
 
  } else if (a != undefined && b != undefined){
    a = result;
    b = parseFloat(number);
    operate();
    number = '';
  }
}


function operate(){
  switch (operator){
    case '÷':
      if (b !== 0){
      result = a / b;
      }else{
        result = 'Error';
      }
      break;
    case '-':
      result = a - b;
      break;
    case '×':
      result = a * b;
      break;
    case '+':
      result = a + b;
      break;
    case '%':
      result = a * b/100;
  }
  display(result, '.display.number');
  display('', '.display.operator');
}