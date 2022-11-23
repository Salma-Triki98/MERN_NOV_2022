//* ---- Hoisting ----*//

//console.log(dog); // dog is not defined
// var dog; // undefined
// the var keyword gets hoisted to the top of the program

//* When js runs, the interpreter has a few passes that it goes through
//* The 1st pass: it created the namespaces
//* 2nd pass does the hoisting
//* 3rd pass interprets certain things & does calculations, then it converts, then it runs it
//! All of this is called Just In Time interpreter "JIT"

// Behind the scenes Js does this ----------
// var dog;
//console.log(dog); // undefined

//----------------------------------
console.log(dog); // undefined
var dog = "Spark";

// Behind the scenes Js does this ------
// var dog;
//console.log(dog);
dog = "Spark";

// Functions also get hoisted to the top --------
// ?console.log(hello(dog));

function hello(name) {
    return "hello " + name;
}

// Going forward we will deprecate the use of Var keyword
// Instead we'll be using let & const
