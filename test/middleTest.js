// const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

//TEST
//console.log(middle([1, 2, 3]) )// => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([2]),[]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2]),[]);
