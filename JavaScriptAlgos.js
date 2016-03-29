// Verify a prime number?

var verPrime = function(num) {
  var upTo = Math.sqrt(num);
  for (var i = 2; i < upTo; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Find all prime factors of a number?

I dunno..

// Get the nth Fibonacci number?

well do later

//Find the greatest common divisor of two numbers?

only technique I can think of is to iterate backwards from the smaller number
and see it's divisble by the larger number

//Remove duplicate members from an array?

var removeDups = function(arr) {
  arr.filter(function(element, index, array) {
    return array.indexOf(element) === index;
  });
}

//merge two sorted array? (is this like merge sort??)
var mergeSort = function(arr1, arr2) {

  var sorted = [];

  while (arr1.length && arr2.length) {

    if (arr1.length === 0) {
      sorted.concat(arr2);
      break;
    } else if (arr2.length === 0) {
      sorted.concat(arr1);
      break;
    }

    if (arr1[0] <= arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }

  }

  return sorted;
}

//Swap two numbers without using a temp variable?
I don't know

//Reverse a string in JavaScript?

str.split('').reverse().join('');

//OR

var str = 'vincent';
str = str.split('');

for (var i = 0; i < str.length/2; i++) {
  var temp = str[str.length-1-i];
  str[str.length-1-i] = str[i];
  str[i] = temp;
}


//How would you reverse words in a sentence?

str.split(' ').reverse().join(' ');

/**
 *	Write a TR function
 */
 function tr(mapLetter, replaceLtr, strToModify) {

   strToModify = strToModify.split('');

   //create a map
   var map = {};
   for (var i = 0; i < mapLetter.length; i++) {
     if (!replaceLtr[i]) {
       map[mapLetter[i]] = mapLetter[i];
     } else {
       map[mapLetter[i]] = replaceLtr[i];
     }
   }

   for (var j = 0; j < strToModify.length; j++) {
     if (map[strToModify[j]]) {
       strToModify[j] = map[strToModify[j]];
     }
   }

   return strToModify.join('');
 }

/**
 * A function that takes a string and find the most less distant two words
 */
const returnLessChar = () => {

};

/**
 *  Check if 2 words are anagrams
 *  @param {String} word1, word2 : words that
 *  are of the same length
 *  @return {Boolean} True if anagrams, false if not
 */
const checkIfAnagram = (word1, word2) => {
  // if they are not same length,
  // they are not anagrams
  if (word1.length !== word2.length) {
    return false;
  }

  // trim whitespaces, split into array
  // sort the array by alphabet
  // and join them back together
  word1 = word1.trim().split('').sort().join('');
  word2 = word2.trim().split('').sort().join('');

  // if they are indeed anagrams
  // they are equal at this point.
  return word1 === word2;
};

/**
 *  check if 2 arrays contain the
 *  same elements.
 *  they can ONLY contain string,
 *  number, or more arrays
 *  @param {array} arr1, arr2
 *  @return {Boolean} true or false
 */
const arrayEquality = (arr1, arr2) => {
  // if they are the same arrays
  // they are equal... edge case!
  if (arr1 === arr2) {
    return true;
  }

  // if they don't match in length
  // they are not considered equal...
  // edge case!
  if (arr1.length !== arr2.length) {
    return false;
  }

  // variable if a value is found
  let same = true;

  // for every element
  for (let i = 0; i < arr1.length; i++) {

    // break loop
    // if I don't have to
    // search anymore
    if (!same) {
      break;
    }

    // if the string and numbers
    // aren't the same
    if (arr1[i] !== arr2[i]) {
      same = false;
    }

    // if elements in the same
    // position in both
    // arrays are arrays,
    // recurse with subarrays
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      same = arrayEquality(arr1[i], arr2[i]);
    }
  }

  // return if they are same or not.
  return same;
};

/**
 *  Wedding.... linear extrapolation.
 *
 */

/**
 *  Binary tree problem with printing out
 *  1213, where A = 1, B = 2, C = 3...Z = 26
 *  and you have to print out all the combinations
 *  such as 1, 21, 3 - 12, 13,... so forth
 */










