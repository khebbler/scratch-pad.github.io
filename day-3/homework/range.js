// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
/*
I: start, end
O: an array containing all integers between the two parameters in reverse order
C: N/A
E: N/A
*/

function range(start, end) {
    // Initializing returnedArray
    var returnedArray = [];
    // If first argument is greater than the second
    if (start > end) {
        // Returning range in reverse order
        for (var i = start; i >= end; i--) {
            returnedArray.push(i);
        }
    // If first argument is less than the second      
    } else if (start < end) {
        // Returning range forward 
        for (var i = start; i <= end; i++) {
            returnedArray.push(i);
        }
    }
    // Returning returnedArray
    return returnedArray
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}