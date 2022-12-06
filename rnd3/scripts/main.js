let myNumber = "74";


console.log(typeof myNumber);
myNumber = Number(myNumber);
myNumber += 3;
console.log(myNumber);


let resetButton = document.createElement('button');
// resetButton.setAttribute("hello",999);

resetButton.textContent = 'Start new game';
document.body.append(resetButton);


// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(10, 10, 1000, 80);

let myh1=document.querySelector('h1');
myh1.textContent='hello';


const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2



