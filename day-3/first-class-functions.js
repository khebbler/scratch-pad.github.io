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
    // Returning function that tests whether value is greater than base
    return function(value) {
         return value > base;
    };
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
    // Returning function that tests whether value is less than base
    return function(value) {
        return value < base;
    };

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
    // Returning function that tests whether string starts with the startsWith character
    return function(string) {
        return string.toLowerCase().startsWith(startsWith.toLowerCase());
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
    // Returning function that tests whether string ends with the endsWith character
    return function(string) {
        return string.toLowerCase().endsWith(endsWith.toLowerCase());
    }
   
}

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
    // Initializing variable for collection
    var modifiedStrings = [];
    // Looping over strings
    for (var i = 0; i < strings.length; i++) {
        // Passing each string to modify function
        var modifiedString = modify(strings[i]);
        // Pusing modified string to array
        modifiedStrings.push(modifiedString);
    }
    // Returning modifiedStrings
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
    // Looping over strings
    for (var i = 0; i < strings.length; i++) {
        // Testing fuction on String
        if (!test(strings[i])) {
            // Returning false if String fails
            return false;
        }
    }
    // Returning true if String passes
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