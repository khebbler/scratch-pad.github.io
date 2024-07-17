// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
/*
I: value
O: a boolean value 
C: use Array.isArray() method
E: N/A
*/

function isArray(value) {
    // Checking if value is an array
    if (Array.isArray(value)) {
        // If value is an array return true
        return true;
    // Otherwise return false    
    } else {
        return false;
    }
}


/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
/*
I: value
O: a boolean value 
C: N/A 
E: N/A
*/

function isObject(value) {
    // Checking if value is an object &  not null, array, or date
    if (typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date)) {
        // If value is an object return true
        return true;
    // Otherwise return false    
    } else {
        return false;
    }
}

/* Why won't this work??
function isObject(value) {
    if (value instanceof Object) {
        return true;
    } else {
        return false;
    }
}
*/


/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I: value
O: a boolean value 
C: N/A 
E: N/A
*/
function isCollection(value) {
    // Checking if value is an array
    if (Array.isArray(value)) {
        // If value is an array return true
        return true;
    // Checking if value is an object    
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date)) {
        // If value is an object return true
        return true;
    // Otherwise, return false    
    } else {
        return false;
    }
}


/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}