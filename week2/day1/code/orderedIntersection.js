/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
//                             a
const arrA1 = [0, 1, 2, 2, 2, 7];
//                         b
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    // the 2 arrays are sorted!
    //  create indexA and indexB for each array
    //  start them at 0
    // ...
    let idxA = 0;
    let idxB = 0;
    const intersection = [];

    while (idxA < sortedA.length && idxB < sortedB.length) {
        if (sortedA[idxA] === sortedB[idxB]) {
            if (intersection[intersection.length - 1] !== sortedA[idxA]) {
                intersection.push(sortedA[idxA]);
            }
            idxA++;
            idxB++;
        } else if (sortedA[idxA] < sortedB[idxB]) {
            idxA++;
        } else {
            idxB++;
        }

    }
    return intersection;
}

// console.log(orderedIntersection(arrA3, arrB3));




/**
 * 
 * @param {<string>} name this function will say hi with the name that we pass as an input
 * @returns 
 */
function hi(name) {
    return "hi " + name;
}

/**
 * this is x!!
 */
// const x = 3
const newName = "Jane"
console.log(hi(newName));