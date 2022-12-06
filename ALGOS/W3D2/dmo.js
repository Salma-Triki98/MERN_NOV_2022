/* 
Recreate Object.entries() method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/
// pseudo code
// 1. loop over obj
// 2. get the keys and values from obj
// 3. 

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};
const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

obj1.__proto__ = obj2;

console.log(Object.entries(obj2));

function entries(obj) {
    let lst = []
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { //this check stops us from pushing any keys that come from a prototype
            lst.push([key, obj[key]])
        }
    }
    return entries
}