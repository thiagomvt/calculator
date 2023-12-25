function add(a, b) {return a + b};
function subtract(a, b) {return a - b};
function multiply(a, b) {return a * b};
function divide(a, b) {return a/b};

let a = undefined;
let b = undefined;
let operator = undefined;

function operate(){
  operator(a, b);
}

let numbers = Array.from(document.querySelectorAll('.number'));
console.log(numbers);

// for (number in numbers){
//   addEventListener(click, function(){

//   })
// }


// let one = document.querySelector('#one');
// let two = document.querySelector('#two');
// let three = document.querySelector('#three');
// let four = document.querySelector('#four');
// let five = document.querySelector('#five');
// let six = document.querySelector('#six');
// let seven = document.querySelector('#seven');
// let eight = document.querySelector('#eight');
// let nine = document.querySelector('#nine');
// let zero = document.querySelector('#zero');