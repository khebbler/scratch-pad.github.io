// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
/*
I: base
O: a function that tests whether a given value is greater than the base
C: N/A
E: N/A
*/

function createGreaterThanFilter(base) {
    // returning a function with a value parameter
    return function(value) {
        // testing whether given value is greater than the base
        return value > base;
    }
   
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */
/*
I: base
O: a function that tests whether a given value is less than the base
C: N/A
E: N/A
*/

function createLessThanFilter(base) {
    // returning function with value as a parameter
    return function(value) {
        // testing whether input value is less than base
        return value < base;
    }
 

}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
/*
I: a single character, startsWith
O: a function that tests whether a given String starts with the startsWith character
C: N/A
E: N/A
*/

function createStartsWithFilter(startsWith) {
    // returning a function that takes a String as a parameter
    return function(string) {
        // testing whether given String starts with the startsWith char
        return string[0] === startsWith;
        };
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
/*
I: a single character, endsWith
O: a function that tests whether a given String ends with the endsWith character
C: N/A
E: N/A
*/

function createEndsWithFilter(endsWith) {
    // returning a function that takes a string as a parameter
    return function(string) {
        // testing whether given String ends with the endsWith character
        return string[string.length - 1] === endsWith;
      };
};

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/*
I: strings, modify
O: the array of strings modified
C: N/A
E: N/A
*/

function modifyStrings(strings, modify) {

    // Initializing storage variable for modified strings
    var modifiedStrings = [];

    // Looping over strings array
    for (var i = 0; i < strings.length; i++) {
        // modifying strings and pushing to modifiedStrings array
        modifiedStrings.push(modify(strings[i]))

    }
    // returning modifiedStrings array
    return modifiedStrings;
   
}



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
I: an Array (strings), a Function (test)
O: a boolean value
C: N/A
E: N/A
*/

function allStringsPass(strings, test) {
    // looping over strings array
    for (var i = 0; i < strings.length; i++) {
        // if string does not pass the test function
        if (!test(strings[i])) {
            // return a boolean false
            return false;
        }
    }
    // if all strings pass the test, return true
    return true;
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}