// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


// Answer
// I used indexOf array method as this method returns the first index at which a given element is found within the array and index cannot be a negative number.
function distinct(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}