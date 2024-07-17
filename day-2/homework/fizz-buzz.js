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
/*
I: none 
O: prints to console
C: print 1-100, & multiples of 3 and 5
E: none
*/

function fizzBuzz() {
    // Looping over 1-100
    for (var i = 1; i <= 100; i++) {
        // if numbers are multiples of 3 and 5 //*control flow*//
        if (i % 3 === 0 && i % 5 === 0) {
            // Log FizzBuzz
            console.log("FizzBuzz");
        // if number are multiples of 3
        } else if (i % 3 === 0) {
            // Log Fizz
            console.log("Fizz");
        // If numbers are multiples of 5
        } else if (i % 5 === 0) {
            // Log Buzz
            console.log("Buzz");
        } else {
            // Log number
            console.log(i);
        }
    }
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}