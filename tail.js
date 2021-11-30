const assertEqual = require('./assertEqual');


const tail = function(arr1) {
  
  let arrReturn = [];
  if (arr1.length <= 1) {
    return arrReturn;
  } else {
    arrReturn = arr1.slice(1);
  } return arrReturn;
  
};


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

module.exports = tail;