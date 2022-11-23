//*       SCOPE        *//
// var x = "hello"

// function sayHi() {
//     x = "hi";
//     return x;
// }
// console.log(sayHi()); // hi

//*    GLOBAL SCOPE
var y = "hello"; //? global scoped variable called y
//
//*  FUNCTION SCOPE
function sayHi() { //
    var y = "hi";  //? function scoped variable called y
    return y;      //creating local var y
}                  // if reassign y than Global scoped Y will change to hi
// ----------------//  

console.log(sayHi()); // hi
console.log(y); // hello
