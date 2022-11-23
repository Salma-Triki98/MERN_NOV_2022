//**        Destructuring        **\\
// Heavily used in react, used in react offical documentation and it's a convention 


// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


// Before ES6 -- Normal way //
// const firstName = person.firstName; 
// const email = person.email;
// const secondAnimal = animals[1];

// With Destructuring aka unpacking //
// const {firstName, email} = person
// console.log(firstName, email);


// const [,secondAnimal,,,lastAnimal] = animals
// console.log(secondAnimal,lastAnimal);


// const email = "joe@doe.com"
// const {firstName, email : personEmail} = person
// console.log(firstName, personEmail);


// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//         {
//             address: '1600 Pennsylvania Avenue',
//             city: 'Washington, D.C.',
//             zipcode: '20500',
//         },
//         {
//             address: '221B Baker St.',
//             city: 'London',
//             zipcode: 'WC2N 5DU',
//         }
//     ],
//     createdAt: 1543945177623
// };


// const { addresses: [firstAdd, secondAdd] } = person
// console.log(secondAdd);

//* Predict Destructuring assignment:
//Problem 1:

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars
// const [, otherRandomCar] = cars
// //Predict the output
// console.log(randomCar) // Tesla
// console.log(otherRandomCar) // Mercedes

//Problem 3:

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password); // 12345
console.log(hashedPassword); // undefined

