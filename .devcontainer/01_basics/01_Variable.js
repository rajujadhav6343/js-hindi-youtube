console.log("Raju");
const accountID = 123456;
let accountEmail = 'rajujadhav6343@gmail.com';
var accoundPassword = "123456";
accoundCity ="Pune";
// accountState; // getting error "accountState is not defined"
let accountState;

// accountID = 2; - Not allowed
accountEmail = "rj@gmail.com";
accoundPassword = "3737";
accoundCity ="Nashik";
console.log(accountID);
console.table([accountID,accountEmail,accoundPassword,accoundCity, accountState]);

/* Prefer not to var 
beacuse of issue in block and function scope
*/