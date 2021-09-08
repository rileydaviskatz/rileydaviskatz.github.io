// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //I: value
    //O: A true or false value depending on if value is an array or not
    //C: N/A
    //E: N/A
    
    //create an if statement to print true if the value is an array
    if (Array.isArray(value) === true) {
        return true;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //I: value variable
    //O: a true or false result if value is an object
    //C: we are looking for a SPECIFIC kind of object, not just any object
    //E: must result in a boolean value
    
    //we are looking to see if the value is a collection and need to make sure we don't have false positives
    //we do this by filtering out arrays, dates, and null values
    
    //filter out nulls
    if(value === null) {
        return false;
    //filter out arrays
     } else if(Array.isArray(value)) {
         return false;
     } else if(value instanceof Date) {
    //filter out dates
        return false;
     } else if(typeof value === 'object') {
    //check if object after all these other tests
        return true;
     } else {
         return false;
     }
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //I: value variable
    //O: a boolean result
    //C: must be an array or a collection
    //E: has to result in a boolean answer
    
    //create an if statement that will test for the kind of value input
    if(Array.isArray(value)) {
        return true;
    } else if (value instanceof Date) {
        return false;
    } else if (value === null) {
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //I: value variable
    //O: a string value or false
    //C: must be a string
    //E: has to result in boolean
    
    //create an if statement that will test if the value is a string or not
    if (typeof value === 'string') {
        return "string";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null"
    } else if (value instanceof Date) {
        return "date";
    } else if (typeof value === 'number'){
        return "number";
    } else if (typeof value === 'boolean') {
        return "boolean";
    } else if (typeof value === 'function') {
        return "function";
    } else if (typeof value === 'object') {
        return "object";
    } else {
        return "undefined";
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
