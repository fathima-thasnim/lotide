const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//Middle function
const middle = function(array) {
  middleElement = [];
  // console.log(middleElement);
  if(array.length < 3) {
    return middleElement;
    
   } else if (array.length % 2) {
    middleElement = [array[(array.length - 1) / 2]];
    console.log(middleElement)
  } else if (!(array.length % 2)) {
    middleElement = [array[array.length / 2 - 1],array[array.length/ 2]];
    ;
  }
  return middleElement;
};
module.exports = middle;

