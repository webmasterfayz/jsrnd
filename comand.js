
//selection 
const guessSubmit = document.querySelector('.guessSubmit');

//User input 
const takeInput = document.querySelector('.guessSubmit');

localStorage.setItem('name', myName);
let storedName = localStorage.getItem('name');

//element create
let resetButton = document.createElement('button');
resetButton.setAttribute("hello",999);
let att=resetButton.getAttribute("hello");


resetButton.textContent = 'Start new game';
document.body.append(resetButton);

console.log(att);


const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2