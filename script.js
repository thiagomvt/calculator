let a = undefined;
let b = undefined;
let result = undefined;
let number = '';
let operator = undefined;

// Displays content on calculator
function display(input, selector){
let display = document.querySelector(selector);
display.textContent = (input);
}

// Handles buttons clicks

let buttons = document.querySelector('#container2');
buttons.addEventListener('click', (event) => {
  
  let button = event.target;
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
      clear();
      break;

    case 'equal':
      if (b === undefined){
        b = parseFloat(number);
        operate();
        a = result;
        operator = event.target.dataset.operator
        number = '';
     
      } else {
        a = result;
        b = parseFloat(number);
        operate();
        number = '';
      }

      display('', '.display.operator');
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
  if (number !== ''){

  if (a === undefined){
    a = parseFloat(number);
    operator = event.target.dataset.operator
    number = '';

  } else if (b === undefined ){
    b = parseFloat(number);
    operate();
    operator = event.target.dataset.operator
    number = '';
 
  } else {
    a = result;
    b = parseFloat(number);
    operate();
    number = '';
  }
}}

function clear (){
  number = '';
  operator = undefined;
  display('', '.display.operator');
  display(number, '.display.number')
  a = undefined;
  b = undefined;
  result = undefined;
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
  number = '';

  const resultToString = result.toString();
  const resultArray = resultToString.split('.');
  const decimalPlaces = resultArray[1]; 

  if (resultToString.includes('.') && decimalPlaces.length > 4 ){
    display(result.toFixed(4), '.display.number');
    display('', '.display.operator');
  }else{
    display(result, '.display.number');
    display('', '.display.operator');
  }
}