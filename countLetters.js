const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(str) {
  const results = {};

  for (let letter of str) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};
const sentence = "afb cef aec";
const test1 = countLetters(sentence);
assertEqual(test1["a"],2);
assertEqual(test1["b"],1);
assertEqual(test1["c"],2);
assertEqual(test1["g"],undefined);