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
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))