// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = "aeiou";
  let count = 0;
  let newStr = str.toLowerCase().split("");
  newStr.map((letter) => {
    if (vowels.includes(letter)) {
      count++;
    }
  });

  return count;
}
