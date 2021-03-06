
/*
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

  function forEach(kate, callback){
    for(var i = 0; i < kate.length; i++) {
      callback(kate[i]);
    }
  }

 var kate = [1,2,3,4]
// testing your code with console.assert
var total = 1;
forEach([1,2,3,4], function(a) { total *= a });
console.log(total);
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    var args = [].slice.call(arguments);
    var total =0;
    for (var i=0; i< args.length; i++)
    total = total + args[i];
    // return total;
    // args.forEach(function(el, idx, arr){
    //   total += el;
    })
    return total;

}

or

function sum(){
    var args = [].slice.call(arguments);
    var total =0;
    args.forEach(function(el, idx, arr){
      total += el;
    })
    return total;

}

console.assert( sum(1, 2, 3, 4, 5) === 15 )


// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    var args = [].slice.call(arguments);
    args.forEach(function (el, indx)){
      var total +=el;
    };
    var avg = total/indx
    return avg
}

console.assert( average(2, 4, 6, 8) === 5 )



// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    var args = [].slice.call(arguments);
    var largestel = args[0];
    args.forEach(function (el, indx, arr){
      if (el>largestel){
        largestel = el;
      }

    })
return largestel;
}

console.assert( largest(2, 4, 6, 8) === 8 )
largest(-5,-3,-7,-8);


// 4. find the longest string of the inputs (returns the longest input (A STRING))

function findLongest(){
    var args = [].slice.call(arguments);
    var longest = [0];
    for (var i = 0; i < args.length; i++){
      if(args[i.length]> longest.length)
      longest = args[i];
    }
    return longest;
}

 console.assert( findLongest("this", "is", "a", "awesome", "function") === "function" );


/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var colors = ["pink", "green", "yellow", "blue"]
colors.sort()
console.assert(colors.sort())


// .concat()
var cat = ["calico", "spotted", "striped"]
var num = ["1", "2", "3"]
var concatted = cat.concat(num);

// .indexOf()
var welcome="Hello, my name is Kate.";
welcome.indexOf("name");

// .split()
var greeting ="Hi, how are you?";
greeting.split("how");

// .join()
var sports = ["bball", "soccor", "football"];
var conf = sports.join();

// .pop()
var sports = ["bball", "soccor", "football"];
sports.pop();

// .push()
var sports = ["bball", "soccor", "football"];
sports.push();

// .slice()
var sports = ["bball", "soccor", "football"];
sports.slice();

// .splice()
var sports = ["bball", "soccor", "football"];
sports.splice();

// .shift()
var sports = ["bball", "soccor", "football"];
sports.shift();

// .unshift()
var sports = ["bball", "soccor", "football"];
sports.unshift();

// .filter()
var numbers = ["1", "2", "13", "14", "15", "16", "20", "25"];

function isSmall(value){
  return value >=15;
}


// .map()
?
