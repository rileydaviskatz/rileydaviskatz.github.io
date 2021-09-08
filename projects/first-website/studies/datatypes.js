/**
 * 
 * DATA TYPES
 * 
 * 0. There are two main kinds of data types: simple and complex
 * 
 * 1. Simple
 * - This kind of data type contains a single value
 * - Can be one of many different kinds of values
 *      a. Number
 *      b. String
 *      c. Boolean
 *      d. null
 *      e. undefined
 *      f. Not a Number
 *      g. Infinity, -Infinity
 * 2. Complex
 * - This kind of data type containts multiple values
 * - Complex data is created by using special declarations
 *      a. Array "[]"
 *      b. Object "{}"
 *      c. Function
 * 
 * 3. Primitive values are passed to a function by copy,
 * meaning the value is passed into a variable, and the variable
 * copies the existing value. Complex values are referred to
 * by reference, meaning when a complex value is passed to a function,
 * instead of creating a copy of the value, it points to an existing
 * value and will change as it changes
 * 
 */
 
 // 1. Number //
 var number = 5;
 console.log(number); //prints => 5
 
 // 2. String //
 var string = "Your Text Here";
 console.log(string); // prints => Your Text Here
 
 // 3. Boolean //
 var bool = true;
 console.log(bool); //prints => true
 
 // 4. Null //
 var nope = null;
 console.log(nope); // prints => null
 
 // 5. undefined //
 var noVal;
 console.log(noVal); //prints => undefined
 
 // 6. Not a Number //
 var notNumber = NaN;
 console.log(notNumber); //prints => NaN
 
 // 7. Infinity, -Infinity //
 var infin = Infinity;
 var antiInfin = -Infinity;
 
 console.log(infin); //prints => Infinity
 console.log(antiInfin); //prints => -Infinity
 
 // 8. Array //
 var arr = [1, "test", [], false];
 console.log(arr); //prints => [1, "test", [], false];
 
 // 9. Objects //
 var obj = {
     animal: true,
     color: "orange",
 };
 
 console.log(obj); // prints => {animal: true, color: "orange"}