const eqArrays = function(arr1,arr2) {
  for (let i = 0; i < Math.max(arr1.length,arr2.length); ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { 
        if (!(eqArrays(object1[key],object2[key]))) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
//test case
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,dc);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,cd2);