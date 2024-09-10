// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for (var i = 1; i <= 100; i++) {
        // if number is a multiple of 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            // print FizzBuzz
            console.log("FizzBuzz");
        // if number is a multiple of 3     
        } else if (i % 3 === 0) {
            // print Fizz
            console.log("Fizz");
        // if number is a multiple of 5     
        } else if (i % 5 === 0) {
            // print Buzz
            console.log("Buzz");
        } else {
            // print the rest of the numbers
            console.log(i);
        }
     
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}