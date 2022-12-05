// findObjectsFilter({searchFor}, [itemsArr])

// given a {search for} object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// // ---------------------------------------------------

//* check if a key exists in an object
// console.log(dog.hasOwnProperty("name"));
// ------------------------------------------------------
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Turing",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
const items1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
const searchFor12 = {
    firstName: "Bob",
    age: 31
};
function findObjectsFilter(searchObj, items) {
    // PSEUDOCODE!!!!
    let filtered = []  // arr to return
    for (let obj of items) { //loop over all objects in items
        let match = true // assume object matches until we know it doesn't
        for (let key in searchObj) { //for each key in our search object
            if (searchObj[key] != obj[key]) { //see if the current obj has the same value as the searchObj at that key
                match = false // if not, not a match
                break; // no need to check further keys if any key isn't a match
            }
        }
        if (match) filtered.push(obj) // if current obj is a match, push it to our return arr
    }
    return filtered
}



const res = findObjectsFilter(searchFor2, items)


console.log(res);