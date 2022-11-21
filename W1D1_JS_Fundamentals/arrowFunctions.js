//*             Arrow Functions            *//

// named function
// function myName1(name) {
//     return "hello " + name
// }

// named function too
const myName2 = function (name) {
    console.log(this); // let's not worry about this for now. Just pointing out that there's a difference
    return "hello " + name
}
console.log(myName2("Joe"));
// The 1st function will get hoisted; 2nd one will not ( const anchors it)

// const myNameArrow = (name) => {
//     //console.log(this);
//     return "hello " + name
// }
// console.log(myNameArrow("Eren"));

// Arrow functions are also syntactic sugar. It also changes how "this" keyword gets passed in here

const myNameAgain = name => "hello " + name; // only when you have one parameter and one instruction to return, then you can omit that syntax
console.log(myNameAgain("Eren"));            // if you have curly braces then you need to be explicit with the keyword return

// Arrow Functions
// cleanliness in code and syntactic sugar
// changes the reference of "this" keyword implies
// Heavy use of arrow functions; all react docs use arrow functions
// you don't have to use in algos
