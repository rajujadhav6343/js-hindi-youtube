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
// console.log(str);
// console.log(typeof(str));




// *************************************Operation**********************************************

let value = 3;
let negValue = -value;

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(3%2);


let str1 ="Raju";

let str2 =" Jadhav";
let str3 =str1+str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // check if first is string then choose data type string
// console.log(1 + 2 + "2"); // // check if first is number then choose data type number
// console.log( 3 + 4 * 5 % 3); // confusing so avoid this;

// console.log(2 + "2" - 1);

console.log(true);
console.log(+true);
console.log(+"");

let x = 3;
const y = x++; // first use/assiged then increment - post increment
console.log(x,y);

let a = 3;
const b = ++a; // first increment then use/assigned - preincrement;
console.log(a,b);