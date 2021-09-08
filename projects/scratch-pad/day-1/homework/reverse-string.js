// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
    //Create a loop that takes the input and reverses the characters
    //create a variable that will hold the new text in the string
    var stringNew = "";
    
    //The loop needs to take every individual character and reorganize them backward
    //"i" will be the placeholder for every character and we need to take the length and count it down
    for (var i = input.length - 1; i >=0; i--) {
      stringNew += input[i];
    }
    //return the new string
    return stringNew;
    

    // YOUR CODE GOES ABOVE HERE //
}


reverseString("hello");


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}