// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: string
O: length of string
C: N/A
E: N/A
*/

function length(string) {
    // Returning length of string
    return string.length;
}


/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I: string
O: a new string forced to lowercase
C: N/A
E: N/A
*/

function toLowerCase(string) {
    // Returning string converted to lowercase
    return string.toLowerCase();
}


/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: string
O: a new string forced to uppercase
C: N/A
E: N/A
*/

function toUpperCase(string) {
    // Returning string converted to uppercase
    return string.toUpperCase();
}


/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: string
O: a new string forced to dash-case
C: N/A
E: N/A
*/

function toDashCase(string) {
    // Converting string to lowercase & replacing spaces with dashes
    return string.toLowerCase().replace(/ /g, '-');
}


/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: string, char
O: a boolean value 
C: function is case insensitive
E: N/A
*/

function beginsWith(string, char) {
    // Converting string to lowercase
    var lowerCaseString = string.toLowerCase();
    // Converting char to lowercase
    var lowerCaseChar = char.toLowerCase();
        // Checking if first character in string is equal to char
        return lowerCaseString[0] === lowerCaseChar;
}


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: string, char
O: a boolean value
C: function is case insensitive
E: N/A
*/

function endsWith(string, char) {
    // Converting string to lowercase
    var lowerCaseString = string.toLowerCase();
    // Converting char to lowercase
    var lowerCaseChar = char.toLowerCase();
        // Checking if the last character in string is equal to char
        return lowerCaseString[lowerCaseString.length - 1] === lowerCaseChar;
}


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: stringOne, stringTwo
O: a string that is the results of concatenating stringOne & stringTwo
C: must use the '+' operator
E: N/A
*/

function concat(stringOne, stringTwo) {
    // Concatenating stringOne and stringTwo
    return stringOne + stringTwo;
}


/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I: any number of strings
O: a string that is the result of joining all of them together
C: N/A
E: N/A
*/

function join(stringOne, stringTwo) {
    
    var args = Array.from(arguments);
        // Returning all strings joined together
        return args.join('');
}


/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: stringOne, stringTwo
O: the longest of the the two strings
C: N/A
E: N/A
*/

function longest(stringOne, stringTwo) {
    // Comparing length of stringOne and stringTwo
    if (stringOne.length >= stringTwo.length) {
        return stringOne; 
    } else {
        return stringTwo;
    }
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: stringOne, stringTwo
O: a number
C: N/A
E: N/A
*/

function sortAscending(stringOne, stringTwo) {
    // Comparing stringOne and stringTwo
    if (stringOne > stringTwo) {
        // Returning -1 if stringOne is higher than stringTwo (?)
        return -1;
    } else if (stringOne < stringTwo) {
        // Returning 1 if stringOne is lower than stringTwo
        return 1;
    } else {
        // Returning 0 if stringOne = stringTwo
        return 0;
    }
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: stringOne, stringTwo
O: a number
C: N/A
E: N/A
*/

function sortDescending(stringOne, stringTwo) {
    // Comparing stringOne and stringTwo 
    if (stringOne < stringTwo) {
        // Returning -1 if stringOne is lower than stringTwo
        return -1;
    } else if (stringOne > stringTwo) {
        // Returning 1 if stringOne is higher than stringTwo
        return 1;
    } else {
        // Returning 0 if stringOne = stringTwo
        return 0;
    }


}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}