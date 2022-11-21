//*      Rest & Spread        *//

// const a = [1, 2, 3, 4];
// const b = a; // Objects and array are complex data types
//Pass by reference (pointing to the same memory space that a is pointing at)
// if I manipulate a, b gets manipulated and vice versa,

// a.push(10);
// b.push(10);

// console.log(a); //[ 1, 2, 3, 4, 10, 10 ]
// console.log(b); //[ 1, 2, 3, 4, 10, 10 ]

// ? For arrays and objects I can change values despite it being a const (complex data types)
//? but not the type
// -------------------------------------

// !I want ~b~ to be ~a~ true copy of a
const a = [1, 2, 3, 4]
const b = [...a]
// b now has it own memory location with its values

a.push(20, 50);
b.push(10);
console.log(a);