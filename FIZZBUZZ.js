'use strict';
function fizzbuzz() {
  var n = 100;
  for (var i = 1; i < n; i++) {
    if (i % 15 === 0) {
      console.log("FIZZBUZZ");
    } else if (i % 3 === 0) {
      console.log("FIZZ");
    } else if (i % 5 === 0) {
      console.log("BUZZ");
    } else{
      console.log(i);
    }
  }
};