// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');



const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it("returns [] for [2]", () => {
    assert.deepEqual(middle([2]), []);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});

//TEST
//console.log(middle([1, 2, 3]) )// => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


// assertArraysEqual(middle([1,2,3,4,5]),[3]);
// assertArraysEqual(middle([2]),[]);
// assertArraysEqual(middle([1,2,3,4]),[2,3]);
// assertArraysEqual(middle([1,2]),[]);
