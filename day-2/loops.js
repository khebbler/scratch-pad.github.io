// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: array
O: print array values to console
C: must use a forward loop
E: N/A
*/

function printArrayValues(array) {
  // Looping forward over array
  for (var i = 0; i < array.length; i++) {
    // Printing array values to console
    console.log(array[i]);
  }
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I: array
O: print array values to console
C: must use a backwards loop
E: N/A
*/

function printArrayValuesInReverse(array) {
  // Looping backwards over array
  for (var i = array.length - 1; i >= 0; i--) {
    // Printing array values to console
    console.log(array[i]);
  }
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: object
O: an array containing the object keys
C: must use a loop
E: N/A
*/

/*
function getObjectKeys(object) {
  Object.keys(object);
}
*/

function getObjectKeys(object) {
  // Initializing storage array
  var storageArray = [];
  // Looping through object
  for (var key in object) {
    // Checking if object has key property
    if (object.hasOwnProperty(key)) {
      // Adding key to storageArray
      storageArray.push(key);
    }
  }
  // Returning storageArray
  return storageArray;
}


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: object
O: print object keys to the console
C: must use for-in loop
E: N/A
*/

function printObjectKeys(object) {
  // Looping through object
  for (var key in object) {
    // Checking if object has key property
    if (object.hasOwnProperty(key)) {
      // Printing object keys to console
      console.log(key);
    }
  }
}

/*
function printObjectKeys(object) {
  // Initializing keys variable
  var keys = Object.keys(object);
  // Looping through array of keys
  for (var i = 0; i , keys.length; i++) {
    // Printing object keys to console
    console.log(keys[i]);
  }
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: object
O: return an array containing the object's values
C: must use a loop
E: N/A
*/

function getObjectValues(object) {
// Initializing value array
var value = [];
  // Looping through object
  for (var key in object) {
    // Checking if object has property
    if (object.hasOwnProperty(key)) {
      // Adding key to value
      value.push(object[key])
    }
  }
  // Returning value
  return value;
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/*
I: object
O: print object values to console
C: must use a loop
E: N/A
*/

function printObjectValues(object) {
  // Looping through object
  for (var key in object) {
    // Checking if object has key property
    if (object.hasOwnProperty(key)) {
      // Printing object value to console
      console.log(object[key]);
    }
  }
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: object
O: number of key/value pairs stored in object
C: must use a loop
E: N/A
*/

function getObjectLength(object) {
  // Initializing count variable
  var count = 0;
  // Looping through object's properties
  for (var key in object) {
    // Checking if object has key property
    if (object.hasOwnProperty(key)) {
      // Incrementing for each property
      count++;
    }
  }
  // Returning count
  return count;
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: object
O: print object values to console in reverse
C: must use a loop
E: N/A
*/

function printObjectValuesInReverse(object) {
    // Initializing keys variable, value is keys of object
    var keys = Object.keys(object);
    // Looping through keys in reverse
    for (var i = keys.length - 1; i >= 0; i--) {
      // Initializing key variable
      var key = keys[i];
      // Printing values of key to console
      console.log(object[key]);
    }
  }






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}