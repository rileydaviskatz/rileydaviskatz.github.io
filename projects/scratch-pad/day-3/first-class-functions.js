// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I: base variable
    //O: comparison between base an input value
    //C: N/A
    //E: could be a string or a number
  var compareBaseValue = function(value) {
        return base < value
   
  } 
  return compareBaseValue;
    // YOUR CODE ABOVE HERE //

}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    var compareBaseValue = function(value) {
        return base > value
    }
    
    return compareBaseValue;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //I: startsWith as a single character, and a string
    //O: Boolean comparison if the letters are the same
    //C: na
    //E: we need to split the string into an array and see if the value is equal to 1
    var startingLetter = startsWith.toLowerCase();
    
    
    var firstLetterTest = function(string1) {
        var lowercaseString = string1.toLowerCase();
        var arr = lowercaseString.split('');
        return startingLetter === arr[0];
    }
    
    return firstLetterTest;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //I: endsWith as a single character, a string
    //O: boolean value of the comparison between the endsWith character and the last letter of the string
    //C: na
    //E: we have to split the string into individual characters to test the last letter
    
    var lastLetter = endsWith.toLowerCase();
    
    var lastLetterTest = function(string1) {
        var lowercaseString = string1.toLowerCase();
        var arr = lowercaseString.split('');
        var i = arr.length - 1;
        return lastLetter === arr[i];
    }
    return lastLetterTest;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //I: an array of strings and a function that is designed to modify the strings
    //O: the array after the modded function has changed the strings
    //C: na
    //E: 
    var arr = [];
    
    for(var i = 0; i <= strings.length - 1; i++) {
            arr.push(modify(strings[i]));
        }
    
    
    return arr;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    var passes = 0;
    
    for(var i = 0; i <= strings.length - 1; i++) {
        if(test(strings[i]) === false) {
            passes += 1;
    }
    }
    if (passes === 0) {
        return true;
    } else {
        return false;
    }
    

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
