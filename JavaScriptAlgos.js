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
const returnLessChar = function() {
  
};