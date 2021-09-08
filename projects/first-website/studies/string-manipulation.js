/**
 * 
 * STRING MANIPULATION
 * 
 * 1. With Operators:
 *      a. Concatenation: We can take two strings and add them together using addition operators
 * 
 * 2. With String Methods:
 *      a. There are so many string methods we can use to access built in JavaScript Functions
 * 
*/

// 1. Concatenation //
var str1 = "cat";
var str2 = "dog";

console.log(str1+str2); //prints => catdog

// 2. String Methods //

var longString = "this string is quite long, innit?"

console.log(longString.length); // prints => 33
console.log(longString.split("")); //prints an array with each individual character and space as indexes
console.log(longString.charAt(7)); // prints => r