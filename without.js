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
};
const without = function(source,itemsToRemove) {
  let output = [...source];
  for (let i = 0; i < itemsToRemove.length; ++i) {
    for (let j = 0; j < output.length; ++j) {
      if (itemsToRemove[i] === output[j]) {
        output.splice(j,1);
        j -= 1;
      }
    }
  }
  return output;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
