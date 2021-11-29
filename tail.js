const assertEqual = require('./assertEqual');


const tail = function(arr1) {
  arr1.shift();
  console.log(arr1);
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

module.exports = tail;