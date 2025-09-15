// To Number:

// let score = "33";
// let score = "33AB";
// let score = null;
// let score = undefined;
// let score = true;
// let score = false;
let score = "Raju Jadhav"

// console.log(3 + "3" - 3);
// console.log(typeof score);
// console.log(typeof(score));

//body.value - if type not sure

let valueInNumber = Number(score); // covert to number type but value not covert alway is string, undefined
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // 33AB, Raju, undefined -> NaN -Not a Number -> special type of data , if Null then give 0 after convert into number

// To Boolean:

// let isLoggedIn = 1;
// let isLoggedIn = 0;
// let isLoggedIn = "";
// let isLoggedIn = "Raju";
// let isLoggedIn = undefined;
let isLoggedIn = null;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof(booleanIsLoggedIn));

// To String

let Num = 4747;

let str = String(Num);
console.log(str);
console.log(typeof(str));