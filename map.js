// const words = ["ground", "control", "to", "major", "tom"];
const eqArrays = function(arr1,arr2){
  if(arr1.length !== arr2.length) {
    return "arrays are not same length";
  }
  for(let i = 0; i <= arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
return true;
};
const assertArraysEqual = function(actualArr,expectedArr){
  if (eqArrays(actualArr,expectedArr)) {
    console.log(`✅✅✅Assertation Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actualArr} !== ${expectedArr}`);
  }
}

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};
const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]);
console.log(result1); 
assertArraysEqual(result1,['g','c','t','m','t']);
const result2 = map(words,word => word.length);
assertArraysEqual(result2,[6,7,2,5,3]);


// console.log(map);