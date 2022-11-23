//*     OOP introduction      *//

// what are classes ?
// blueprint (factory)

//? Object literal (we created the obj ourselves)

const myBook = {
    title: "my cool JS",
    pages: 9001,
    author: "Camus",
    publishYear: 1942
}

const myBook2 = {
    title: "my cool Java",
    pages: 123,
    author: "Twain",
    publishYear: 2000
}

const myBook3 = {
    title: "my cool Lisp",
    pages: 728,
    author: "Unknown",
    publishYear: 1960
}

// => To avoid duplicating code, we make classes to build blueprints

class Book {
    constructor(bookTitle, bookPages, bookAuthor, bookPublishYear = 2022) {// constructor to set defaults
        // console.log(this); // the current class
        this.title = bookTitle;
        this.pages = bookPages;
        this.author = bookAuthor;
        this.bookPublishYear = bookPublishYear;
        // this.publishYear = bookPublishYear || 2022;
    }
}

const nameOfTheBook = new Book("Harry Potter", 700, "J K Rowling");
// console.log(nameOfTheBook);

// ------------------------------------------------------------------

class Vehicle {
    constructor(name, year, make, model, miles, size) {
        this.name = name;
        this.year = year;
        this.make = make;
        this.model = model;
        this.miles = miles;
        this.engineSize = size;


    }
    drive() { //(1)
        this.miles += 10;
        // console.log(this.miles);
        console.log(this.name + " drove " + this.miles);
        // return this  // Chaint the methods just like python with self
    }

    honk(anotherVehicle) { //(2)
        console.log(`${this.name} honked at ${anotherVehicle.name}`); // String interpolation 
    }

    honkOnlyOnVehicle(onlyVehicle) { //(2)
        if (onlyVehicle instanceof Vehicle) {
            console.log(`${this.name} honked at ${onlyVehicle.name}`);
        } else {
            console.log("hello");
        }
    }

}

const lexus = new Vehicle("Lexi", 2031, "Lexus", "LS350", 10, "V8");

// lexus.drive()

//? Reminder about the 4 pillars of OOP

// Head to the platform and check Inheritance and Super page

class Tesla extends Vehicle {
    constructor(name, model, size, autopilot = false) {
        super(name, 2022, "Tesla", model, 10, size) // a Tesla need to be a Vehicle first
        this.autopilot = autopilot;
    }

}

const modelS = new Tesla("speedy", "S", "100kW", true);
// console.log(modelS);
// modelS.drive();

// lexus.honk(modelS);

const person = {
    name: "Bob",
    age: 81
}

lexus.honkOnlyOnVehicle(person); // person is not an instance of Vehicle