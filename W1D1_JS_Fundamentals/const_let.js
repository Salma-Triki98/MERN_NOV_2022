//*-----------------const & let-----------------*//

//console.log(dog); //Cannot access 'dog' before initialization
//let dog = "Spark"; 

// => Let and Const act as anchors wherever you declare it it stays.
// => It never gets Hoisted to the top

//let dog = "Spark"; 
//console.log(dog); //Spark
// ----------------------------------------------



// ----------------------------------------------
const num = 3;
console.log(num); // 3
num = 5; // TypeError Assignment to constant variable.
// => if you have a varibale that never changes you always use const
// => if you don't know try const and if it breaks use let. That's what the offical docs says
// => NEVER use the var keyword, not in algos not in code

// Google JS style Guide: 
// 5.1 Local variable declarations
// Declare all local variables with either const or let. Use const by default, unless a variable needs to be reassigned. The var keyword must not be used.
//----------------------------------------------------



//! Make an example from the HOIST assignment on the platform
// What's the intepreter doing in the background
// Example 1: ------------------------------------

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// // What the interpreter does
// // *1st: hoist the var keywords and functions

// var brendan;

// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);

// ---------------------------------------------


// Example 2: ------------------------------------

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Interpreter

var food;
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();

