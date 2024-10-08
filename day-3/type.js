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
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // Checking if input value is an array
    if (Array.isArray(value) === true) {
        // returning true if value is an array
        return true;
    // otherwise return false
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

    // if value is an object
        // value is not null
            // value is not an Array
                // value is not a Date
    if (typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof Date)) {
        // returning true
        return true;
    // otherwise return false
    } else {
        return false;
    }


    // YOUR CODE ABOVE HERE //
}



/*
isObject({ a: 1, b: 2}); // true
isObject([1, 2, 3]); // false
isObject(null); // false
isObject(new Date()); // false
*/

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //

    // ******(typeof value === 'object': Confirms the value is an object or array)
    
    // if value is an object or array 
        // value is not null
                // value is not a Date
                if (typeof value === "object" && value !== null && !(value instanceof Date)) {
                    // returning true
                    return true;
                // otherwise return false
                } else {
                    return false;
                }
    
    
    
    
    // YOUR CODE ABOVE HERE //
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

    // if input value is null
    if (value === null) {
        // return null
        return "null"; 
    // if input value is an Array      
    } else if (Array.isArray(value) === true) {
        // return array
        return "array";
    // if input value is a date    
    } else if (value instanceof Date === true) {
        // return date
        return "date";
    // return values that can be checked with typeof operator 
    } else {
        return typeof value;
    }
    
    
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