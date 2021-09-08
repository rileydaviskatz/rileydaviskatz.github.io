/**
 * CONTROL FLOW
 * 
 * The control flow refers to the order that a computer reads the instructions in a program
 * 
 * In JAVASCRIPT the computer reads top to bottom, right to left
 * 
 * 0. If statements refer to conditional statements that, if returned as a boolean TRUE, will execute specific code
 * 
 * 1. Else If statements refer to conditional statements that, if the original if statement returned FALSE, the computer
 * will check if this new condition is met. If returned TRUE, the code within the else if braces will be executed
 * 
 * 2. Else refers to the default code that will be run if the previous if and else if statments all return FALSE
 * 
 * 3. Switch statements refers to blocks of code that alter behavior if certain conditions are met, else
 * default code will run
 * 
 */
 
 // 1. creating an if statement //
 var result = 0;
 if (result === 0){
     console.log('yes'); // prints => yes
 }
 
 // 2. creating an else if statement //
 
 var resultTwo = 1;
 if(resultTwo === 0) {
     console.log('yes');
 } else if (resultTwo === 1) {
     console.log('no'); // prints => no
 }
 
 // 3. creating an else statement //
 var resultThree = 2;
 
 if(resultThree === 0) {
     console.log('yes');
 } else if (resultThree === 1) {
    console.log('no');
 } else {
     console.log('invalid result'); // prints => invalid result
 }
 
 // 4. creating a switch statment that takes an uppercase letter and prints a lowercase one
 var upperCaseLetter = "A";
 switch (upperCaseLetter) {
     case "A":
         console.log('a'); // prints => a
         break;
     
     case "B":
         console.log('b');
         break;
         
     case "C":
         console.log('C');
         break;
 }