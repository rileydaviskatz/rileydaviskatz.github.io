/**
 * LOOPS
 * 
 * 1. Kinds of Loops
 *      a. While: We use while loops in order to loop through a specific set of values based on certain criteria. In many cases,
 *          we can use the increment or decrement operators to loop through values until a specific ending point is reached
 * 
 *      b. For: We can use a foor loop to access the values of an array and loop through the indexes of it by using the
 *              length method
 *      c. For-In: This allows us to access the keys and properties of an object
 */
 
 // 2. Loop any number of times //
        
        for(var i = 0; i <= 10; i++ ){
            console.log(i); // will print the new value of i each time the loop runs through 10, counting up to 10
        }
        
        for(var j = 10; j >= 0; i--){
            console.log(j); //prints value of j every time the loop runs, printing 10 and down to 0
        }
// 3. Loop over array //
        
        var arr = [1, 3, 5, 7, 9];
        for(var k = 0; k < arr.length; k++){
            console.log(arr[k]); // will print each index starting at arr[0] until it reaches the end of it
        }
        
// 4. Loop over Object // 
  for(var key in object){
     // do something
    }
