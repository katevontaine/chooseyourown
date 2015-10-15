
// sum(2,3)
// console.log(arguments);
// if (typeof x ==="number" && typeof y === "number")


// function sum(){
//   console.log(arguments)
// var args = [].slice.call(arguments)
// }
// sum(2, 3)
//
//
// // /for loop
// for ( var i = 0; i < args.length ; i++) {
//
// }

--------------------------------------------------------------------------------


/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

 function sum(x,y)
 {
   console.log(arguments);
   if (typeof x ==="number" && typeof y === "number")
     console.log( x + y)
    return x+y;

 }

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

//avg 219.88333333333335
var matt = {
    finishingTime1: 240, //in minutes
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5,
    finishingTime6: 227.4
};
//avg 114.38
var mark = {
    finishingTime1: 120, //in minutes
    finishingTime2: 110.4,
    finishingTime3: 135.1,
    finishingTime4: 108.9,
    finishingTime5: 97.5
};


 var getAverageTime = function(person) {
        var avg=0;
        var inc=0;
 for (var i in person) {
      avg +=  person[i];
      console.log(person[i]);
      inc++;

 }
  avg= avg/inc;
 return avg;
 }

console.log(getAverageTime(matt)); 219.88333333333335
console.log(getAverageTime(mark)); 114.38


/**
 * PART 3
 *
 *
 * Modify the following to calculate the difference between the two accounts.
 */

/**
 * declarations
 */

var MattsBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

var RobertosBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

function addToBank(account, savings, retirement, checking) {
    "use strict";
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}

function getSumOfAccounts(accounts) {
    "use strict";
  return account.savings + account.retirement + accounts.checking
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos); // should calculate to -158
