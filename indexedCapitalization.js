// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

function capitalize(s, arr) {
  const strA = s.split("");
  arr.forEach((idx) => {
    if (strA[idx] !== undefined) {
      strA[idx] = strA[idx].toUpperCase();
    }
  });
  return strA.join("");
}