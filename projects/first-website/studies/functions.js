/**
 * FUNCTIONS
 * 
 * 1. The two phases to using functions:
 *      a. First we must CREATE the function.
 *          -we do this by using the function method, then declaring the function
 *      b. Next we can execute the function by using the EXECUTION CONTEXT by creating code within the braces to explain
 *          what a function will do when the function is called.
 * 
 * 2. There are two kinds of values passed into functions:
 *      a. parameters: these are the placeholder values that create a placeholder instance of values that will be actually passed in later. These
 *                      also represent the specific amount of values that will be passed in during a call.
 *      b. arguments: these are the actual values we are passing into a function. These will be pushed into spots where parameters are holding. However,
 *                      only the number of parameters that are declared during function creation will be used. Excess arguments can be passed in,
 *                      but will not be used.
 * 
 * 
 */ 
 
 //1. Syntax of a function //
 function add(param1, param2) {
     return param1 + param2;
 }
 
 console.log(add(1, 2)); //prints => 3
 
 //2. Assigning a function to a variable //
 
 var funcOne = function subtract(param1, param2){
     return param2 - param1;
 }
 
 console.log(funcOne); //prints function: subtract
 
 /**
  * 
  * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
  *     - We specify inputs by citing the parameters when creating the function, and then passing in the values of those
  *         parameters when we call the function, in order
  * 
  * 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
  *     -functions can see varibles called outside of them; however, variables called within a function are
  *         not available outside of them
  * 
  * 7. Closures: Functions form closures around the data they house. If an object returned from the function and is held in
  *                 memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist within these closures
  * 
  */
  
  // Closure Example //
  
  function add2(param1){
      function addition(param2) {
          return param1 + param2;
      }
      return addition;
  }
  
  console.log(add(1, 5)); //prints => 6
 
 