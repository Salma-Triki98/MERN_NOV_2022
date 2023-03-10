/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.

    TODO-   this sort splits the array into two portions (conceptually, not literally).
    TODO  - the left portion will become sorted, the right portion
    TODO    (that hasn't been iterated over yet) is unsorted.

    !can shift OR swap target element until it reaches desired position
    ? shifting steps:

    *1. consider the first item as sorted
    *2. move to the next item
    *3. store current item in a temp var (to make this position available to shift items)
    *4. if item to the left of current is greater than current item, shift the left item to the right.
    *5. repeat step 4 as many times as needed
    *6. insert current item
    *7. move to the next item and repeat

    ?swap steps:
    *1. consider the first item as sorted
    *2. move to the next item
    *4. if item to left of current item is less than current, swap
    *5. repeat step 4 until item to left is less than current item
    *6. move to next item and repeat
*/
const arr = [1, 2, 9, 76, 4];
const arr2 = [5, 3, 4, 1, 2];

function sortInsert(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log(sortInsert(arr2));