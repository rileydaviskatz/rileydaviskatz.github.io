/**
 * OPERATORS
 * 1. Assignment Operators
 *      -These are how we assign values to variables. EXAMPLE: The equal sign ( = )
 * 
 * 2. Arithmetic Operators
 *      -These are the operators that help us create mathematic values by adding, subtracting, multiplying, dividing
 *          and so on. These are effective and work on numeric values
 * 
 * 3. Comparison Operators
 *      -These operators help us compare values and return boolean values depending on if the conditions in place are met
 * 
 * 4. Logical Operators:
 *      - These allow us to test multiple conditions
 * 
 * 5. Unary Operators (!, typeof, -)
 *      -These operators allow us to save time by using shorthand to increment, decrement or create positive and negative values.
 *          We can also check the value type of parameter or variable by using typeof
 * 
 * 6. Ternary Operator:
 *      -This is a unique operator in JavaScript that takes three different operands: condition1 ? condition2: condition3
 *          This uses boolean to test if a result is true or false, and depending on if true or false,  one of the conditions 2 or 3
 *          will be executed
 * 
 * 
 */
 
 // 1. Assignment //
 var a = 1;
 console.log(a); // prints => 1
 
 // 2. Arithmetic Operators //
 var b = 2;
 var c = a + b;
 console.log(c); //prints => 3
 
 var d = b - a;
 console.log(d); //prints => 1
 
 var e = a * b;
 console.log(e); //prints => 2
 
 // 3. Comparison Operators //
 if(a < b){
     console.log("true"); // prints => true
 } else { 
     console.log("false");// doesn't print in this case
 }
 
 if(a > b){
     console.log("something has gone wrong"); //doesn't print in this case
 } else {
     console.log("something has gone right"); //prints => "something has gone right"
 }
 
 // 4. Logical Operators //
 if(1 > 0 && 2 > 1){
     console.log("true"); // prints true because this logic is always correct
 }
 
 // 5. Unary Operators //
 var a = "testing for typeof"
 
 var typ = typeof a;
 console.log(typ); // prints => string
 
 var e = 5;
 
 var typE = typeof e;
 console.log(typE); // prints => number
 
 // 6. Ternary Operators //
 function attendance(present) {
     return (present ? "here": "not here");
 }
 
 console.log(attendance(true)); // prints => here
 console.log(attendance(false)); // prints => not here