const score = 500
// console.log(score);

const balance = new Number(300)
// console.log(balance);
// console.log(balance.toFixed(3));
// console.log(balance.toString().length);
// console.log(typeof balance);

//  to precision

const preNum = 54.55443
// console.log(preNum.toPrecision(5));

// to local string (represent the best notation of numbers)

const amount = 154300000.543
// console.log(amount.toLocaleString("en-IN"));

//  Maths

// console.log(Math);
// console.log(Math.abs(-657));
// console.log(Math.round(4.5));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.1));
// console.log(Math.sqrt(4));

//  min & max avalue in numbers

// console.log(Math.min(2,3,5,1,0,5));
// console.log(Math.max(2,5,8,10,45));

//  math random

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10+1));

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max -min +1))+ min);
