// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //create a for loop that cycles through the values of an array
  for (var i = 0; i <= array.length - 1; i++) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //create a for loop that prints the input array values in reverse
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //create an array that will hold the values of an object
  var arr = [];
  
  //fill the array with the object input
  arr = Object.keys(object);
  
  //return the array that now holds the keys
  return arr;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create an array that will hold the values of the input object
  var arr = [];
  
  //fill the array
  arr = Object.keys(object);
  
  //create a for loop that prints the  keys
  for (var i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //create an array that will hold the values of an object input
  var arr = [];
  
  //fill the array
  arr = Object.values(object);
  
  //return the array
  return arr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //create an array that will hold the values of an object input
  var arr = [];
  
  //fill the array
  arr = Object.values(object);
  
  //create a for loop that will print the values of the object
  for (var i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
 //create a variable that will return the length of the object
 var objectLength = Object.keys(object).length;
 
 return objectLength;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //create a variable that will hold the length of the object
  var objectLength = Object.values(object).length;
  
  //create an array that will hold the values of the object
  var arr = Object.values(object);
  
  //create a loop that will print the values of the object in reverse order
  for (var i = objectLength - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;

} 