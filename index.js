'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

function identity(value) {
    return value;
}
module.exports.identity = identity;

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
 function typeOf (value) {
    if (value === null) {
      return "null";
  } else if (Array.isArray(value) === true) {
      return "array";
  } else if (value instanceof Date === true) {
      return "date";
  } else if (typeof value === 'object') {
      return "object";  
  } else {
    return typeof value;
  }   
}
module.exports.typeOf = typeOf;
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
    function first(array, number) {
    //create an empty array that will hold our final return
    let result = [];
    //use an if else chain
    //check to see that the argument passed thru the array parameter is an array
    //if it isnt, or if the number is negative, return an empty array
    if (Array.isArray(array) === false || number < 0) {
        return [];
    //if a number isn't given return the first index of the array
    } else if (number == null) {
        return array[0];
    //if there are more numbers than there are indexes in the array, return the whole array
    } else if (number > array.length) {
        return array;
    //finally,  if the previous conditions aren't fufilled, return the first x(number) items of the array
    } else {
    //use a for loop to loop over array as many times as number 
        for (let i = 0; i < number; i++) {
            result.push(array[i]);
        }
    } return result;
}
module.exports.first = first;
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
    function last(array, number) {
    //create an empty array that will hold our final return
    let result = [];
    //use an if else chain
    //check to see if the argument passed thru the array parameter is an array
    //if it isn't, or if the number is negative, return an empty array
    if (Array.isArray(array) === false || number <0) {
        return [];
    //if a number isn't given return the first index of the array
    } else if (number == null) {
        return array[array.length - 1];
    //if there are more numbers than there are indexes in the array, return the whole array
    } else if (number > array.length) {
        return array;
    //finally, if the previous conditions aren't fufilled, return the last x(number) items of the array
    } else {
        for (let i = array.length - number; i < array.length ; i++) {
            result.push(array[i]);
        }
    } return result; 
} 

module.exports.last = last;
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//input: array and value to search for
//output: index of array where value first appears or -1 if value not in array
function indexOf (array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }     
    } return -1;
  
};
module.exports.indexOf = indexOf;
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
function contains (array, value) {
    return array.includes(value);
}
module.exports.contains = contains;

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
function unique(array) {
    return Array.from(new Set(array));
}
module.exports.unique = unique;
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
function filter (array, test) {
    let elementArray = [];
        for (let i = 0; i < array.length; i++) {
            if (test(array[i], i, array) === true) {
                elementArray.push(array[i]);
            }
        }
    return elementArray;
}
module.exports.filter = filter;

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
function reject(array, func) {
//create an empty array to hold the final result
    let myArray = [];
//call filter function and pass thru it array and an anonymous function that takes element, index, and array as it's arguments
    filter(array, function(e, i, a) {
//let the results of array passing thru filter equal a function that will take those results and convert them into a boolean value  
            let result = func(array[i], i, array);
            if (result !== true) {
//if the result does not equal true, meaning that it doesn't exist in filters final array, push that element into myArray
                 myArray.push(array[i]);
        }
    });
    return myArray;
}
module.exports.reject = reject;
/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
function partition(array, test) {
  let fail = [];
  let match = [];
  filter(array, function(e, i, a) {
     let result = test(array[i], i, array);
     if (result === true) {
         match.push(array[i]);
     } else {
         fail.push(array[i]);
     }
 });

  return [match, fail];
}

module.exports.partition = partition;
/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
function map(collection, test) {
    let newValueArray = [];
        if (Array.isArray(collection) === true){
            for (let i=0; i < collection.length; i++){
            newValueArray.push(test(collection[i], i, collection));
             }
        } else if(typeof(collection) === 'object'){
             for (var i in collection){
            newValueArray.push(test(collection[i], i, collection));
        }
    }
    return newValueArray;
}
module.exports.map = map;

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
function pluck (array, property) {
 let plucked = [];
  map(array, function(e, i, a) {
     plucked.push(array[i][property]);
 });
 return plucked;
}
module.exports.pluck = pluck;


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
function every(collection, test) {
var check = test || identity;
if (Array.isArray(collection) === true) {
    for (let i = 0; i < collection.length; i++){
//if even one value when run thru test equals false, return false
        if (check(collection[i]) === false) { 
            return false; 
        }
    }
     return true;
} else {
    for (const key in collection) {
        if (collection[key] === true) {
    } return true;
  } return false;
}
}
module.exports.every = every;

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
function some(collection, test){
var check = test || identity;
if (Array.isArray(collection) === true) {
    for (let i = 0; i < collection.length; i++){
//if even one value when run thru test equals false, return false
        if (check(collection[i]) === true) { 
            return true; 
        }
    }
     return false;
} else {
    for (const key in collection) {
        if (collection[key] === true) {
    } return true;
  } return false;
}
}
module.exports.some = some;

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
function reduce(array, test, seed) {
  let previousResult;
  if(seed !== undefined){
    previousResult = seed;
    each(array, function (e,i,a){
      previousResult = test(previousResult, e, i,a);
    });
  }else {
    previousResult = array[0];
    for (let i = 1; i < array.length; i++){
      previousResult = test(previousResult, array[i], i, array);
    }
  }
  return previousResult;
}
module.exports.reduce = reduce;
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

function extend(object1, ...args) {
    Object.assign(object1, ...args);
    return object1;
}
module.exports.extend = extend;