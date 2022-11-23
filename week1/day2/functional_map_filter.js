//* Functional programming
//*       .map().filter()      *//
//https://login.codingdojo.africa/m/130/6947/50207

//? Talking about callback functions
// setTimeout(function () { // anonymous function
//     console.log("Hello!");
// }, 3000)


// npm install -g nodemon
//! Make sure Auto Save is OFF

// ----------------------------------------------------
//?         .map()                 
// JS built-in methods
// Array.prototype.map() MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Array.prototype.pop() MDN


const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

//?Syntax
// Inline callback function
const newAnimals = animals.map(function (everOneAnimal) {
    return everOneAnimal + " is cool";
})
// console.log(newAnimals);

//?Syntax
// Arrow function
// map((element) => { /* … */ })
// const arrowAnimals = animals.map(animal => animal + " is cool");
// console.log(arrowAnimals);

//?Syntax
// Arrow function
// map((element, index) => { /* … */ })
// const arrowAnimals = animals.map((animal, someIdx) => animal + " is cool, " + someIdx);
// console.log(arrowAnimals);


//! We can write mulitple things in this function
// const arrowAnimals = animals.map((animal, someIdx) => {
//     console.log("I'm looking at", animal);
//     return animal + " is cool, " + someIdx
// });
// console.log(arrowAnimals);

//?Shorter version

// const newAnimalShort = animals.map(()=>{}) (1)
// const newAnimalShort = animals.map((everOneAnimal, index)=>{}) (2)
// const newAnimalShort = animals.map((everOneAnimal, bob) => {
//     return `${bob + 1} - ${everOneAnimal} is very cool`
// }) (3)

// console.log(newAnimalShort);


// ---------------------------------------------

//?             .filter()
// MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// animals.filter((animal, i) => {
//     if (animal.length <= 5) {
//         return true
//     } else {                      //* (1)
//         return false
//     }
// })


// const filteredAnimals = animals.filter((animal, i) => {
//     if (animal.length <= 5) {
//         return true
//     } else {                      //* (2) since it returns a new array we save it into one
//         return false
//     }
// })

// console.log(filteredAnimals);

const shortFilter = animals.filter((a) => {
    return a.length <= 5
});

const shorterFilter2 = animals.filter(a => a.length <= 5); // Not recommended till you feel really comfortable
// console.log(shorterFilter2);

//! can't debug the last one because you end up adding curly braces and the return and a console.log()
//! and it can turn into a mess


//? filter() + map() chaining them together

// console.log(
//     shorterFilter2.map(el => el + " is cool!")
// );
//                    filter will return['zebra','lion'].map()                  
const combo = animals.filter(a => a.length <= 5).map(el => el + " is cool!")
// console.log(combo);

//? Best assignment for this is Object Master: (optional assign)
//=> https://login.codingdojo.africa/m/130/6947/50209

// -----------------------------------------------------------------------------------

const people = [
    { name: "Bob", age: 30 },
    { name: "Mary", age: 31 },
    { name: "Sue", age: 28 },
    { name: "George", age: 38 }
];

// long version
const varName = people.filter((person) => {
    // console.log(person.age);
    if (person.age >= 30) {
        return true
    } else {
        return false
    }
})

// short verson
const newPeople = people.filter((el) => el.age >= 30)
// console.log(newPeople);

// chain it to map()
const newPeopleChain = people.filter((el) => el.age >= 30).map(p => p.name + " is over 30")
// console.log(newPeopleChain);

// When poping an element, did you wonder what does it return ?
console.log(animals.pop());


//! Make sure you are all using  "GIT-BASH"