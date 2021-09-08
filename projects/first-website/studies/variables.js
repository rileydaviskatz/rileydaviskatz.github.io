/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**
 * LET VARIABLES:
 * 
 * 0. We can also use let to create a variable if we want it to be block scoped as opposed to
 * function scoped
 * 
 * 1. To create a let variable use the keyword, let, to declare it and follow it with
 * a name for the variable
 * 
 * 2. There are two phases of using let variables: declaration and initialization (or assignment).
 */
 
 // 1. declaration //
 let test; 
 
 // 2.initialization or assignment //
 test = "test";
 console.log(test); // prints => test
 
 // 3. reassignment //
 test = "test2";
 console.log(test); // prints => test2
 
 //NOTE: We can reassign the let variable to anything - can't do that with constants
 test = true;
 console.log(test); // prints => true
 test = 5;
 console.log(test); // prints => 5
 
 
 /**
  * CONSTANT VARIABLES
  * 
  * 0. We can create a constant, unchanging block-scoped variable
  * 
  * 1. To create a constant variable, use the keyword const to declare it and follow it with a name
  *  - NOTE: Must be assigned a value when declared or else it will not work
  * 
  */
  
  // 1. declaring correctly //
  
  const workingConstTest = true;
  console.log(workingConstTest); // prints => true
  
  //NOTE: You cannot reassign or redeclare a const variable because it is unchanging //
  
  /**
   * HOISTING
   * 
   * 0. Variables will be hoisted to the top of a program meaning the code will allot space to memory for variables
   * before the program is run.
   *    -This means we can declare variables after they are called
   *    -Once code is run, they will be hoisted to the top and filled with data.
   * 
   */
   
   // 1. declaring a variable before calling it //
   var a = 5;
   console.log(a); // prints => 5
   
   // 2. declaring a variable after it is called //
    console.log(b); // prints => 5
    var b = 5;
  
  