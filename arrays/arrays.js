// ------ Array Questions ------ //

// 1. Reverse String 
// "Hi my name is Andrei" => "ierdnA si eman iH"

// - create empty array
// - iterate through the string backwards 
// - push each character to the empty array 
// - return the empty array with the .join("") method

function reverseString (str) {
    const reversed = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i])
      
    }
    return reversed.join("")
}

function reverseString2(str) {
    return str.split("").reverse().join("")
}

console.log(reverseString2("Hi my name is Andrei"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Merge Sorted Arrays 
// We have 2 sorted arrays, we want merge these 2 arrays and create 3rd merged array
// don't use array methods and solve the problem manually 
// Questions to ask: 
// Can one of the arrays be empty? yes!
// Should the same exact numbers that are repeated in both arrays be added to the 3rd array twice? yes!

// 1. 
// function mergeSortedArrays(array1, array2) {

//  if(array1.length === 0) {
//     return array2;
//   }
//   if(array2.length === 0) {
//     return array1;
//   }
//     const mergedArray = [];
//     let array1Item = array1[0];
//     let array2Item = array2[0];

//     while (array1Item || array2Item){
//         if(array2Item === undefined || array1Item < array2Item){
//           mergedArray.push(array1Item);
//           array1Item = array1[i];
//           i++;
//         }
//     else {
//         mergedArray.push(array2Item);
//         array2Item = array2[j];
//         j++;
//       }
// }
// return mergedArray;
// }
// console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));

  
// 2. 
function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0; 
  let j = 0; 

  // edge cases

  if(arr1.length === 0) {
        return arr2;
      }
  if(arr2.length === 0) {
        return arr1;
      }

  while(i < arr1.length || j < arr2.length) {
    if (arr2[j] === undefined || arr1[i] < arr2[j] ) {
      result.push(arr1[i]);
      i++
    } else {
      result.push(arr2[j]);
      j++
    }
  }

  return result;

}
console.log(mergeSortedArrays([0,2,4,6,8,10], []))

// 3. 
// Shorter version but uses array methods!
// const mergeSortedArrays = (arr1, arr2) => {
//     let mergedArrs = arr1.concat(arr2);
//     const sortedMergedArrs = mergedArrs.sort((a,b) => a-b);
//     return sortedMergedArrs;
//   }
  
//   console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 3. Two Sum 

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

// Time Complexity is O(n2) which is really bad 

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
         if (i !== j) {
                  if (nums[i] + nums[j] === target) {
                      return [i, j]
                  }
              }

          }
          }
};

// O(n)
var twoSum = function(nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]

    if (seen[complement] !== undefined) {
      return [seen[complement], i]
    }

    seen[nums[i]] = i;
  }
 
};

console.log(twoSum([2,7,11,15], 9))

// Solution using JS Map 

var twoSum = function(nums, target) {
  let hash_map = new Map();
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (hash_map.has(complement)) {
          return [hash_map.get(complement), i];
      }
      hash_map.set(nums[i], i);
  }
  return [];
};

// 4. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {

  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) {
      return true
    }
    map.set(nums[i], i)
  }
  
  return false;
      
  };


// Maximum Subarray 

// Given an integer array nums, find the subarray with the largest sum, and return its sum.



// Add To Array 

/* Write a function that takes a location, either "FRONT" or "BACK" and adds an element to either the front or back of the given array. If location is anything besides "FRONT" or "BACK", print an error. Your function should not return anything and should mutate the original array. (Hint: Look up the JavaScript functions: push/pop/shift/unshift) */

function addToArray(location, element, arr) { 

  if(location == "FRONT") {
    arr.unshift(element)
  } else if(location == "BACK") {
    arr.push(element)
  } else {
    console.log("ERROR")
  }
}

// Sum Array

/* Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers. */

// KNOW how to find the sum of elements in an array with a counter!

function sumArray(array) {
  let sum = 0; 
  for(i = 0; i < array.length; i++) {
    let el = array[i]; 
    sum += el; 
  }
  return sum; 
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30


// Even Numbers

/* Write a function evenNumbers(max) that takes in a number as an arg. The function should return an array containing all positive, even numbers that are less than max. 

Define this function using function expression syntax. */


let evenNumbers = function(max) {
  let arr = []; 
  
  for(let i = 1; i < max; i++){
    if(i % 2 === 0) {
      arr.push(i); 
    }
  }
  return arr; 
}


// Fizz Buzz

/*  Define a function fizzBuzz(max) that takes a number and prints
every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not
both. */


function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

// function fizzBuzzWhile(max) {
//   let i = 0;
//   while (i < max) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.log(i);
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }

// function fizzBuzzNested(max) {
//   for (let i = 0; i < max; i += 1) {
//     if (i % 3 === 0) {
//       if (i % 5 !== 0) {
//         console.log(i);
//       }
//     } else if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// Is Substring

/* Write a function isSubstring that takes in two strings, searchString and subString. The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise. */

function isSubstring(searchString, subString) {
  let lowerSearchStr = searchString.toLowerCase();
  let lowerSubStr = subString.toLowerCase();

  return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}

// Doubler

/* Write a function doubler(numbers) that takes an array of numbers and returns a new array
where every element of the original array is multiplied by 2.

*/

function doubler(numbers) {
  let doubledNums = [];

  let i = 0;
  while (i < numbers.length) {
    let oldNum = numbers[i];
    let newNum = oldNum * 2;
    // this step is important because concat does NOT change the original array
    doubledNums = doubledNums.concat(newNum);

    i += 1;
  }

  return doubledNums;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]


// Is Substring

/* Write a function isSubstring that takes in two strings, searchString and subString. The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise. */


function isSubstring(searchString, subString) {
  let lowerSearchStr = searchString.toLowerCase();
  let lowerSubStr = subString.toLowerCase();

  return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false


// Move Zeroes 

/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array. */

var moveZeroes = function(nums) {

  let i = 0;
  let j = 0;
  
  while(j < nums.length) {
      if (nums[j] !== 0) {
          let temp = nums[i]
          nums[i] = nums[j];
          nums[j] = temp; 

          i++

      }
       j++;
  }
  };


  // Longest Word 

  /* Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
  If there are two or more words that are the same length, return the first word from the string with that length. 
  Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567" */

  function LongestWord(sen) { 

    // code goes here  
    let words = sen.replace(/[^0-9a-zA-Z\s]/g, '').split(" ");
    
    let longestWord = '';
    let maxLength = 0;
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > maxLength) {
        LongestWord = word;
        maxLength = word.length
      }
    }
    return LongestWord;
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));


  // Remove Even Integers From an Array

  // Implement a function removeEven(arr), which takes an array arr in its input and removes all the even elements from a given array.

  function removeEven(arr) {
    let odds = []
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (ele % 2 === 1) {
            odds.push(ele)

        }
    }

    return odds
}

// Merge Two Sorted Arrays

// Implement a function that merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).




// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

var is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

var array_Clone = function(arra1) {
  return arra1.slice(0);
     };
 console.log(array_Clone([1, 2, 4, 0]));
 console.log(array_Clone([1, 2, [4, 0]]));


 // Common interview questions in 2023

 // How do you create an empty array in JavaScript?

 // Answer: You can create an empty array in JavaScript using either of the following methods:

// Using array literal syntax: let arr = [];
// Using the Array() constructor: let arr = new Array();

// How do you access the first and last elements of an array?

let arr = [1, 2, 3, 4];
let firstElement = arr[0]; // 1
let lastElement = arr[arr.length - 1]; // 4

// How do you add an element to the end of an array?

let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]


// What is the output of the following code?

const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers.length);

101


// The reason for this solution is as follows: JavaScript placesempty as a value for indices 3 - 99. Thus, when you set the value of the 100th index, the array looks like:



//How can you double elements of an array using reduce? Please note that you cannot create additional variables.

const arrayOfNumbers = [1, 2, 3, 4];
arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);


// What is the output of the following code snippet?

let arrayOfLetters = ['a','b','c','d','e','f'];
const anotherArrayOfLetters = arrayOfLetters;
arrayOfLetters = [];
console.log(anotherArrayOfLetters);

['a','b','c','d','e','f']


// How could you print unique values from an array?

// const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
// console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]

function getUniqueValues(arrOfNum) {
  const set = new Set(arrOfNum);
  return [...set];
}


// How could you destructure array elements?


// Without destructuring 
const address = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];
console.log(
  "Address 1: " + address[0],
  "Address 2: " + address[1],
  "Address 3: " + address[2]
);


// With destructuring
const [address1, address2, address3] = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];
console.log(
  "Address 1: " + address1,
  "Address 2: " + address2,
  "Address 3: " + address3
);


// What is the value of x & y?

const fn = (a, ...numbers, x, y) => {
  console.log(x, y)
};


//SyntaxError: Rest parameter must be last formal parameter

// 1. What are Dynamic Arrays? How are they different from Basic Arrays?

// Dynamic arrays (also known as a growable array, resizable array, mutable array, or ArrayLists in Java) offer a big improvement, i.e., automatic resizing.

// An array has a fixed size, so you always have to specify the number of elements your array will hold ahead of time. However, a dynamic array expands as you add more elements to it and you need not determine the size ahead of time.

// 2. What is meant by Sparse Array?

// An array of data with many elements that have a zero value is termed a sparse array. Contrastingly, a dense array has most of the elements with non-zero values. Sparse array maps integers to objects, and its indices can contain gaps. These are more memory-efficient than a HashMap.


// 3. When would you use a linked list over an array?


// Linked lists can be used over arrays when:

// You require constant-time insertions/deletions from the list, where time predictability is absolutely critical.
// You do not know how many items the list will include. As in basic arrays, you have to re-declare and copy memory if the array size increases.
// You do not require random access to any elements.
// You might have to insert items in the middle of the list as in a priority queue.

// What are the time complexities of sorted array operations, inserting a new element in dynamic arrays, and deleting a specific element?

// sort(Object[]) works on the TimSort algorithm and gives a time complexity of O(n log(n)). The TimSort algorithm uses insertion sort and merge sort algorithms.
// The time complexity of inserting a new element in a dynamic array is O(N).
// The average case time complexity of deleting a specific element is O(N) in an array.


// How can you double elements of an array? Do not use extra variable?

arr.reduce((accumulator, currentValue, index, array)=> array[index -1] =array[index -1] *2  )

// How to check if given input is string ?

Object.prototype.toString.call(new String()) ==='[object String]'


// How to check if given input is array ?


Object.prototype.toString.call(new Array()) ==='[object Array]'


// What will be the result when executing the given code?


const arr = ['A', 'N', 'U'];
arr[10] = 10;
console.log(arr.length);

11


// What is the output of the following code?

let array = [1, 2, 3, 4, 5];
array.length = 0;
console.log(array)

[]


// Explanation:

// The code sets the length of the array to 0 using array.length = 0, effectively clearing all elements from the array. As a result, when you log the array to the console (console.log(array)), you'll get an empty array ([]).

// How can you extract and print the unique values from an array?

const getUniqueValues = (arr) => [...new Set(arr)];


// How can you determine if a number is an integer in JavaScript?

const isInt = (num) => num % 1 === 0;


// What is the output of the following code?
let arr1 = [10, 12, 3.1];
let arr2 = [10, 12, 3.1];
console.log(arr1 == arr2);

false 

// What is the output of the following code?
let originalArray = [1, 2, 3];
let copiedArray = originalArray.slice();
copiedArray.push(4);
console.log(originalArray);
console.log(copiedArray);

[1, 2, 3]
[1, 2, 3, 4]



//What are the different data types present in javascript?


1. Primitive types

String - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.

Example :

var str = "Vivek Singh Bisht"; //using double quotes
var str2 = 'John Doe'; //using single quotes
Number - It represents a number and can be written with or without decimals.
Example :

var x = 3; //without decimal
var y = 3.6; //with decimal
BigInt - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.
Example :

var bigInteger =  234567890123456789012345678901234567890;
Boolean - It represents a logical entity and can have only two values : true or false. Booleans are generally used for conditional testing.
Example :

var a = 2;
var b =  3;
var c =  2;
(a == b) // returns false
(a == c) //returns true
Undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.
Example :

var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined
Null - It represents a non-existent or a invalid value.
Example :

var z = null;
Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
Example :

var symbol1 = Symbol('symbol');
typeof of primitive types :
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol
2. Non-primitive types

Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.
Object - Used to store collection of data.
Example:
// Collection of data in key-value pairs

var obj1 = {
   x:  43,
   y:  "Hello world!",
   z: function(){
      return this.x;
   }
}
      
// Collection of data as an ordered list
     
var array1 = [5, "Hello", true, 4.1]; 


// Explain Hoisting in javascript.

Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.


This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

Example 1:

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;
Example 2:

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 
Example 3:

// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope

Note - Variable initializations are not hoisted, only variable declarations are hoisted:
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;
Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:
"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 


// 3. Why do we use the word “debugger” in javascript?


// The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.

//4. Difference between “ == “ and “ === “ operators.

var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same
(x === y) // Returns false since the typeof x is "number" and typeof y is "string"


//Difference between var and let keyword in javascript.

// Some differences are 

// From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.
// The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.
// In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

// What is NaN property in JavaScript?

//NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

//typeof of NaN will return a Number.

//To check if a value is NaN, we use the isNaN() function,

Note- isNaN() function converts the given value to a Number type, and then equates to NaN.
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true


// Explain passed by value and passed by reference.

// In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

// For understanding passed by value and passed by reference, we need to understand what happens when we create a variable and assign a value to it,

// var x = 2;
// In the above example, we created a variable x and assigned it a value of “2”. In the background, the “=” (assign operator) allocates some space in the memory, stores the value “2” and returns the location of the allocated memory space. Therefore, the variable x in the above code points to the location of the memory space instead of pointing to the value 2 directly.


//What is an Immediately Invoked Function in JavaScript?

//An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

Syntax of IIFE :

(function(){ 
  // Do something;
})();
//To understand IIFE, we need to understand the two sets of parentheses that are added while creating an IIFE :

//The first set of parenthesis:

(function (){
   //Do something;
})
////While executing javascript code, whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name.

function() {
  //Do something;
}
// Compiler gives an error since the syntax of declaring a function is wrong in the code above.
//To remove this error, we add the first set of parenthesis that tells the compiler that the function is not a function declaration, instead, it’s a function expression.

//The second set of parenthesis:

(function (){
  //Do something;
})();
//From the definition of an IIFE, we know that our code should run as soon as it is defined. A function runs only when it is invoked. If we do not invoke the function, the function declaration is returned:

(function (){
  // Do something;
})

// Returns the function declaration
//Therefore to invoke the function, we use the second set of parenthesis.

//What do you mean by strict mode in javascript and characteristics of javascript strict-mode?

// In ECMAScript 5, a new feature called JavaScript Strict Mode allows you to write a code or a function in a "strict" operational environment. In most cases, this language is 'not particularly severe' when it comes to throwing errors. In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler.  Thus programmer's chances of making an error are lowered.

// Characteristics of strict mode in javascript

// Duplicate arguments are not allowed by developers.
// In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
// The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.
// Engineers will not be allowed to create global variables in 'Strict Mode.


//Explain Higher Order Functions in javascript.

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

Higher-order functions are a result of functions being first-class citizens in javascript.

Examples of higher-order functions:

function higherOrder(fn) {
  fn();
}
   
higherOrder(function() { console.log("Hello world") });  
function higherOrder2() {
  return function() {
    return "Do something";
  }
}      
var x = higherOrder2();
x()   // Returns "Do something"

// Explain “this” keyword.


The “this” keyword refers to the object that the function is a property of.

The value of the “this” keyword will always depend on the object that is invoking the function.\

Confused? Let’s understand the above statements by examples:

function doSomething() {
  console.log(this);
}
   
doSomething();
What do you think the output of the above code will be?

Note - Observe the line where we are invoking the function.

// Check the definition again:

// The “this” keyword refers to the object that the function is a property of.
// In the above code, the function is a property of which object?

// Since the function is invoked in the global context, the function is a property of the global object.

// Therefore, the output of the above code will be the global object. Since we ran the above code inside the browser, the global object is the window object.

//Example 2:

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
   
obj.getName();

//Example 3:

 var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
     
}
       
var getName = obj.getName;
       
var obj2 = {name:"akshay", getName };
obj2.getName();

// Example 4:

var obj1 = {
  address : "Mumbai,India",
  getAddress: function(){
  console.log(this.address); 
}
}
 
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
obj2.getAddress();    
Can you guess the output?

//The output will be an error.

// 14. What do you mean by Self Invoking Functions?


// Without being requested, a self-invoking expression is automatically invoked (initiated). If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself.

// Normally, we declare a function and call it, however, anonymous functions may be used to run a function automatically when it is described and will not be called again. And there is no name for these kinds of functions.


// Explain call(), apply() and, bind() methods.

// call()

function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj);
        
// Returns "Hello Sandy"	

// example 2:

var person = {
  age: 23,
  getAge: function(){
    return this.age;
  }
}        
var person2 = {age:  54};
person.getAge.call(person2);      
// Returns 54  


// call accepts arguments

function saySomething(message){
  return this.name + " is " + message;
}     
var person4 = {name:  "John"};     
saySomething.call(person4, "awesome");
// Returns "John is awesome"    


// apply()

function saySomething(message) {
  return this.name + "is" + message;
}

var person4 = {name:  "John"};
saySomething.apply(person4, ["awesome"]);

// bind()

var bikeDetails = {
  displayDetails: function(registrationNumber,brandName){
  return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
}
}
 
var person1 = {name:  "Vivek"};
   
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
    
// Binds the displayDetails function to the person1 object
      
    
detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet


// What is the difference between exec () and test () methods in javascript?

// test () and exec () are RegExp expression methods used in javascript. 
// We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.
// We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'.

// What is currying in JavaScript?

function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 

// answer

function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12


// What are some advantages of using External JavaScript?

// External JavaScript is the JavaScript Code (script) written in a separate file with the extension.js, and then we link that file inside the <head> or <body> element of the HTML file where the code is to be placed. 

// Some advantages of external javascript are

// It allows web designers and developers to collaborate on HTML and javascript files.
// We can reuse the code.
// Code readability is simple in external javascript.


// 19. Explain Scope and Scope Chain in javascript.


var globalVariable = "Hello world";

function sendMessage(){
  return globalVariable; // can access globalVariable since it's written in global space
}
function sendMessage2(){
  return sendMessage(); // Can access sendMessage function since it's written in global space
}
sendMessage2();  // Returns “Hello world”

// Function Scope: Any variables or functions declared inside a function have local/function scope, which means that all the variables and functions declared inside a function, can be accessed from within the function and not outside of it.

function awesomeFunction(){
  var a = 2;

  var multiplyBy2 = function(){
    console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
  }
}
console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside

multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope


// Block Scope: Block scope is related to the variables declared using let and const. Variables declared with var do not have block scope. Block scope tells us that any variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it.

{
  let x = 45;
}

console.log(x); // Gives reference error since x cannot be accessed outside of the block

for(let i=0; i<2; i++){
  // do something
}

console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block


// Scope Chain: JavaScript engine also uses Scope to find variables. Let’s understand that using an example:

var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}
favFunction();


// Explain Closures in JavaScript.

var Person = function(pName){
  var name = pName;

  this.getName = function(){
    return name;
  }
}

var person = new Person("Neelesh");
console.log(person.getName());

function randomFunc(){
  var obj1 = {name:"Vivian", age:45};

  return function(){
    console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure(); 


// What are object prototypes?

// All javascript objects inherit properties from a prototype. For example,

// Date objects inherit properties from the Date prototype
// Math objects inherit properties from the Math prototype
// Array objects inherit properties from the Array prototype.
// On top of the chain is Object.prototype. Every prototype inherits properties and methods from the Object.prototype.
// A prototype is a blueprint of an object. The prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.
// Let’s see prototypes help us use methods and properties:

var arr = [];
arr.push(2);

console.log(arr); // Outputs [2]

// In the code above, as one can see, we have not defined any property or method called push on the array “arr” but the javascript engine does not throw an error.

// The reason is the use of prototypes. As we discussed before, Array objects inherit properties from the Array prototype.

// The javascript engine sees that the method push does not exist on the current array object and therefore, looks for the method push inside the Array prototype and it finds the method.

// Whenever the property or method is not found on the current object, the javascript engine will always try to look in its prototype and if it still does not exist, it looks inside the prototype's prototype and so on.

// What are callbacks?

function divideByHalf(sum){
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum){
  console.log(sum * 2);
}

function operationOnSum(num1,num2,operation){
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20



//What are the types of errors in javascript?

// There are two types of errors in javascript.

// Syntax error: Syntax errors are mistakes or spelling problems in the code that cause the program to not execute at all or to stop running halfway through. Error messages are usually supplied as well.
// Logical error: Reasoning mistakes occur when the syntax is proper but the logic or program is incorrect. The application executes without problems in this case. However, the output findings are inaccurate. These are sometimes more difficult to correct than syntax issues since these applications do not display error signals for logic faults.


// What is memoization?
// Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.
// Let’s understand memoization, by converting a simple function to a memoized function:

// Note- Memoization is used for expensive function calls but in the following example, we are considering a simple function for understanding the concept of memoization better.


function memoizedAddTo256(){
  var cache = {};

  return function(num){
    if(num in cache){
      console.log("cached value");
      return cache[num]
    }
    else{
      cache[num] = num + 256;
      return cache[num];
    }
  }
}
var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return

// What is recursion in a programming language?

function add(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + add(number - 1);
  }
}
add(3) => 3 + add(2)
          3 + 2 + add(1)
          3 + 2 + 1 + add(0)
          3 + 2 + 1 + 0 = 6  


//The following function calculates the sum of all the elements in an array by using recursion:

function computeSum(arr){
  if(arr.length === 1){
    return arr[0];
  }
  else{
    return arr.pop() + computeSum(arr);
  }
}
computeSum([7, 8, 9, 99]); // Returns 123


// What is the use of a constructor function in javascript?

function Person(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}


var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);


// Constructor functions are used to create objects in javascript.

// When do we use constructor functions?

// If we want to create multiple objects having similar properties and methods, constructor functions are used.

// Note- The name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.


// What is DOM?

// DOM stands for Document Object Model.  DOM is a programming interface for HTML and XML documents.
// When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.

// Which method is used to retrieve a character from a certain index?
// The charAt() function of the JavaScript string finds a char element at the supplied index. The index number begins at 0 and continues up to n-1, Here n is the string length. The index value must be positive, higher than, or the same as the string length.

// What do you mean by BOM?
// Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object.

// What is the distinction between client-side and server-side JavaScript?

// Client-side JavaScript is made up of two parts, a fundamental language and predefined objects for performing JavaScript in a browser. JavaScript for the client is automatically included in the HTML pages. At runtime, the browser understands this script.


// Server-side JavaScript, involves the execution of JavaScript code on a server in response to client requests. It handles these requests and delivers the relevant response to the client, which may include client-side JavaScript for subsequent execution within the browser.

// JavaScript Interview Questions for Experienced


// What are arrow functions?

// Traditional Function Expression
var add = function(a,b){
  return a + b;
}

// Arrow Function Expression
var arrowAdd = (a,b) => a + b;

var obj1 = {
  valueOfThis: function(){
    return this;
  }
}


// What do mean by prototype design pattern?
// The Prototype Pattern produces different objects, but instead of returning uninitialized objects, it produces objects that have values replicated from a template – or sample – object. Also known as the Properties pattern, the Prototype pattern is used to create prototypes.

// The introduction of business objects with parameters that match the database's default settings is a good example of where the Prototype pattern comes in handy. The default settings for a newly generated business object are stored in the prototype object.

// The Prototype pattern is hardly used in traditional languages, however, it is used in the development of new objects and templates in JavaScript, which is a prototypal language.



var variable1 = 23;

let variable2 = 89;

function catchValues(){
  console.log(variable1);
  console.log(variable2);

// Both the variables can be accessed anywhere since they are declared in the global scope
}

window.variable1; // Returns the value 23

window.variable2; // Returns undefined


// The variables declared with the let keyword in the global scope behave just like the variable declared with the var keyword in the global scope.
// Variables declared in the global scope with var and let keywords can be accessed from anywhere in the code.
// But, there is one difference! Variables that are declared with the var keyword in the global scope are added to the window/global object. Therefore, they can be accessed using window.variableName.
// Whereas, the variables declared with the let keyword are not added to the global object, therefore, trying to access such variables using window.variableName results in an error.

var vs let in functional scope

function varVsLetFunction(){
  let awesomeCar1 = "Audi";
  var awesomeCar2 = "Mercedes";
}

console.log(awesomeCar1); // Throws an error
console.log(awesomeCar2); // Throws an error

{
  var variable3 = [1, 2, 3, 4];
}

console.log(variable3); // Outputs [1,2,3,4]

{
  let variable4 = [6, 55, -1, 2];
}

console.log(variable4); // Throws error

for(let i = 0; i < 2; i++){
  //Do something
}

console.log(i); // Throws error

for(var j = 0; j < 2; i++){
  // Do something
}

console.log(j) // Outputs 2 


// Const keyword

// Variables with the const keyword behave exactly like a variable declared with the let keyword with only one difference, any variable declared with the const keyword cannot be reassigned.
// Example:
const x = {name:"Vivek"};

x = {address: "India"}; // Throws an error

x.name = "Nikhil"; // No error is thrown

const y = 23;

y = 44; // Throws an error
// In the code above, although we can change the value of a property inside the variable declared with const keyword, we cannot completely reassign the variable itself.


// Rest parameter ( … ):

// It provides an improved way of handling the parameters of a function.
// Using the rest parameter syntax, we can create functions that can take a variable number of arguments.
// Any number of arguments will be converted into an array using the rest parameter.
// It also helps in extracting all or some parts of the arguments.
// Rest parameters can be used by applying three dots (...) before the parameters.
function extractingArgs(...args){
  return args[1];
}

// extractingArgs(8,9,1); // Returns 9

function addAllArgs(...args){
  let sumOfArgs = 0;
  let i = 0;
  while(i < args.length){
    sumOfArgs += args[i];
    i++;
  }
  return sumOfArgs;
}

addAllArgs(6, 5, 7, 99); // Returns 117
addAllArgs(1, 3, 4); // Returns 8

//**Note- Rest parameter should always be used at the last parameter of a function:

// Incorrect way to use rest parameter
function randomFunc(a,...args,c){
//Do something
}

// Correct way to use rest parameter
function randomFunc2(a,b,...args){
//Do something
}


// Spread Operator 

function addFourNumbers(num1,num2,num3,num4){
  return num1 + num2 + num3 + num4;
}

let fourNumbers = [5, 6, 7, 8];


addFourNumbers(...fourNumbers);
// Spreads [5,6,7,8] as 5,6,7,8

let array1 = [3, 4, 5, 6];
let clonedArray1 = [...array1];
// Spreads the array into 3,4,5,6
console.log(clonedArray1); // Outputs [3,4,5,6]


let obj1 = {x:'Hello', y:'Bye'};
let clonedObj1 = {...obj1}; // Spreads and clones obj1
console.log(obj1);

let obj2 = {z:'Yes', a:'No'};
let mergedObj = {...obj1, ...obj2}; // Spreads both the objects and merges it
console.log(mergedObj);
// Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};

//***Note- Key differences between rest parameter and spread operator:

// Rest parameter is used to take a variable number of arguments and turns them into an array while the spread operator takes an array or an object and spreads it
// Rest parameter is used in function declaration whereas the spread operator is used in function calls.


// What is the use of promises in javascript?

// Before promises, callbacks were used to handle asynchronous operations. But due to the limited functionality of callbacks, using multiple callbacks to handle asynchronous code can lead to unmanageable code.

// Promise object has four states -

// Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.
// Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.
// Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.
// Settled - This state represents that the promise has been either rejected or fulfilled.
// A promise is created using the Promise constructor which takes in a callback function with two parameters, resolve and reject respectively.


// resolve is a function that will be called when the async operation has been successfully completed.

// reject is a function that will be called, when the async operation fails or if some error occurs.

// Example of a promise:

// Promises are used to handle asynchronous operations like server requests, for ease of understanding, we are using an operation to calculate the sum of three elements.


function sumOfThreeElements(...elements){
  return new Promise((resolve,reject)=>{
    if(elements.length > 3 ){
      reject("Only three elements or less are allowed");
    }
    else{
      let sum = 0;
      let i = 0;
      while(i < elements.length){
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: "+sum);
    }
  })
}


// What are classes in javascript?

// Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions. They provide a new way of declaring constructor functions in javascript.  Below are the examples of how classes are declared and used:


// Before ES6 version, using constructor functions
function Student(name,rollNumber,grade,section){
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.section = section;
}

// Way to add methods to a constructor function
Student.prototype.getDetails = function(){
  return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}';
}


let student1 = new Student("Vivek", 354, "6th", "A");
student1.getDetails();
// Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A

// ES6 version classes
class Student{
  constructor(name,rollNumber,grade,section){
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
  }

  // Methods can be directly added inside the class
  getDetails(){
    return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}';
  }
}

let student2 = new Student("Garry", 673, "7th", "C");
student2.getDetails();
// Returns Name: Garry, Roll no:673, Grade: 7th, Section:C


// What are generator functions?

// Introduced in the ES6 version, generator functions are a special class of functions.

// They can be stopped midway and then continue from where they had stopped.

// Generator functions are declared with the function* keyword instead of the normal function keyword:

function* genFunc(){
  // Perform operation
}
In normal functions, we use the return keyword to return a value and as soon as the return statement gets executed, the function execution stops:

function normalFunc(){
  return 22;
  console.log(2); // This line of code does not get executed
}
In the case of generator functions, when called, they do not execute the code, instead, they return a generator object. This generator object handles the execution.

function* genFunc(){
  yield 3;
  yield 4;
}
genFunc(); // Returns Object [Generator] {}
The generator object consists of a method called next(), this method when called, executes the code until the nearest yield statement, and returns the yield value.

//For example, if we run the next() method on the above code:

genFunc().next(); // Returns {value: 3, done:false}
//As one can see the next method returns an object consisting of a value and done properties.  Value property represents the yielded value. Done property tells us whether the function code is finished or not. (Returns true if finished).

//Generator functions are used to return iterators. Let’s see an example where an iterator is returned:

function* iteratorFunc() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
      count++;
      yield i;
  }
  return count;
}

let iterator = iteratorFunc();
console.log(iterator.next()); // {value:0,done:false}
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:true}
// As you can see in the code above, the last line returns done:true, since the code reaches the return statement.



// Explain WeakSet in javascript


// In javascript, a Set is a collection of unique and ordered elements. Just like Set, WeakSet is also a collection of unique and ordered elements with some key differences:

// Weakset contains only objects and no other type.
// An object inside the weakset is referenced weakly. This means, that if the object inside the weakset does not have a reference, it will be garbage collected.
// Unlike Set, WeakSet only has three methods, add() , delete() and has() .
const newSet = new Set([4, 5, 6, 7]);
console.log(newSet);// Outputs Set {4,5,6,7}

const newSet2 = new WeakSet([3, 4, 5]); //Throws an error


let obj1 = {message:"Hello world"};
const newSet3 = new WeakSet([obj1]);
console.log(newSet3.has(obj1)); // true

// Why do we use callbacks?
// A callback function is a method that is sent as an input to another function (now let us name this other function "thisFunction"), and it is performed inside the thisFunction after the function has completed execution.

// JavaScript is a scripting language that is based on events. Instead of waiting for a reply before continuing, JavaScript will continue to run while monitoring for additional events. Callbacks are a technique of ensuring that a particular code does not run until another code has completed its execution.

// Explain WeakMap in javascript

// In javascript, Map is used to store key-value pairs. The key-value pairs can be of both primitive and non-primitive types. WeakMap is similar to Map with key differences:

// The keys and values in weakmap should always be an object.
// If there are no references to the object, the object will be garbage collected.
const map1 = new Map();
map1.set('Value', 1);

const map2 = new WeakMap();
map2.set('Value', 2.3); // Throws an error

let obj = {name:"Vivek"};
const map3 = new WeakMap();
map3.set(obj, {age:23});


// What is Object Destructuring?


//Object destructuring is a new way to extract elements from an object or an array.

// Object destructuring: Before ES6 version:
const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard:1
}

const classStrength = classDetails.strength;
const classBenches = classDetails.benches;
const classBlackBoard = classDetails.blackBoard;
The same example using object destructuring:

const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard:1
}

const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;

console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1


//As one can see, using object destructuring we have extracted all the elements inside an object in one line of code. If we want our new variable to have the same name as the property of an object we can remove the colon:

const {strength:strength} = classDetails;
// The above line of code can be written as:
const {strength} = classDetails;
Array destructuring: Before ES6 version:
const arr = [1, 2, 3, 4];
const first = arr[0];
const second = arr[1];
const third = arr[2];
const fourth = arr[3];
The same example using object destructuring:

const arr = [1, 2, 3, 4];
const [first,second,third,fourth] = arr;
console.log(first); // Outputs 1
console.log(second); // Outputs 2
console.log(third); // Outputs 3
console.log(fourth); // Outputs 4

// Difference between prototypal and classical inheritance

// Programers build objects, which are representations of real-time entities, in traditional OO programming. Classes and objects are the two sorts of abstractions. A class is a generalization of an object, whereas an object is an abstraction of an actual thing. A Vehicle, for example, is a specialization of a Car. As a result, automobiles (class) are descended from vehicles (object).

// Classical inheritance differs from prototypal inheritance in that classical inheritance is confined to classes that inherit from those remaining classes, but prototypal inheritance allows any object to be cloned via an object linking method. Despite going into too many specifics, a prototype essentially serves as a template for those other objects, whether they extend the parent object or not.

// What is a Temporal Dead Zone?

// Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. It is a behaviour where we try to access a variable before it is initialized. Examples of temporal dead zone:

x = 23; // Gives reference error

let x;

function anotherRandomFunc(){
  message = "Hello"; // Throws a reference error

  let message;
}
anotherRandomFunc();
// In the code above, both in the global scope and functional scope, we are trying to access variables that have not been declared yet. This is called the Temporal Dead Zone.

// What are the primitive data types in JavaScript?
// A primitive is a data type that isn't composed of other data types. It's only capable of displaying one value at a time. By definition, every primitive is a built-in data type (the compiler must be knowledgeable of them) nevertheless, not all built-in datasets are primitives. In JavaScript, there are 5 different forms of basic data. The following values are available:

// Boolean
// Undefined
// Null
// Number
// String


// What is the role of deferred scripts in JavaScript?

// The processing of HTML code while the page loads are disabled by nature till the script hasn't halted. Your page will be affected if your network is a bit slow, or if the script is very hefty. When you use Deferred, the script waits for the HTML parser to finish before executing it. This reduces the time it takes for web pages to load, allowing them to appear more quickly.

// What has to be done in order to put Lexical Scoping into practice?
// To support lexical scoping, a JavaScript function object's internal state must include not just the function's code but also a reference to the current scope chain.

// What is the purpose of the following JavaScript code?

var scope = "global scope";
function check() 
{
    var scope = "local scope"; 
    function f() 
    { 
         return scope; 
    }
    return f;
}

// JavaScript Coding Interview Questions
// 1. Guess the outputs of the following codes:

/ Code 1:

function func1(){
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },3000);

  var x = 2;
  let y = 12;
}
func1();

// Code 2:

function func2(){
  for(var i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
}
}
func2();

// Code 3:

(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();


// Answers:

// Code 1 - Outputs 2 and 12. Since, even though let variables are not hoisted, due to the async nature of javascript, the complete function code runs before the setTimeout function. Therefore, it has access to both x and y.
// Code 2 - Outputs 3, three times since variable declared with var keyword does not have block scope. Also, inside the for loop, the variable i is incremented first and then checked.
// Code 3 - Output in the following order:
2
4
3
1 // After two seconds
// Even though the second timeout function has a waiting time of zero seconds, the javascript engine always evaluates the setTimeout function using the Web API, and therefore, the complete function executes before the setTimeout function can execute.

// Guess the outputs of the following code:

// Code 1:

let x= {}, y = {name:"Ronny"},z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
console.log(x[y]);

// Code 2:

function runFunc(){
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}
runFunc();

// Code 3:

let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));

// Answers:

// Code 1 - Output will be {name: “Akki”}.

// Adding objects as properties of another object should be done carefully.

// Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} ,

// While setting a property of an object, javascript coerces the parameter into a string.

// Therefore, since y is an object, it will be converted to ‘object Object’.

// Both x[y] and x[z] are referencing the same property.

// Code 2 - Outputs in the following order:

// 11
// Nan
// 2-22
// NaN
// Hello78
// Code 3 - Output in the following order due to equality coercion:

// true
// false

//Guess the output of the following code:

var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})(); 

// Answer:
// Output is NaN.

// random() function has functional scope since x is declared and hoisted in the functional scope.

// Rewriting the random function will give a better idea about the output:

function random(){
  var x; // x is hoisted
  x++; // x is not a number since it is not initialized yet
  console.log(x); // Outputs NaN
  x = 21; // Initialization of x
}

// Guess the outputs of the following code:

// Code 1

let hero = {
  powerLevel: 99,
  getPower(){
    return this.powerLevel;
  }
}

let getPower = hero.getPower;

let hero2 = {powerLevel:42};
console.log(getPower());
console.log(getPower.apply(hero2));



// Code 2

const a = function(){
  console.log(this);

  const b = {
    func1: function(){
      console.log(this);
    }  
  }

  const c = {
    func2: ()=>{
      console.log(this);
    }
  }

  b.func1();
  c.func2();
}

a();



// Code 3

const b = {
  name:"Vivek",
  f: function(){
    var self = this;
    console.log(this.name);
    (function(){
      console.log(this.name);
      console.log(self.name);
    })();
  }
}
b.f();

// Code 1 - Output in the following order:

// undefined
// 42
// Reason - The first output is undefined since when the function is invoked, it is invoked referencing the global object:

// window.getPower() = getPower();

// Code 2 - Outputs in the following order:

// global/window object
// object "b"
// global/window object

// Since we are using the arrow function inside func2, this keyword refers to the global object.

// Code 3 - Outputs in the following order:

// "Vivek"
// undefined
// "Vivek" 
// Only in the IIFE inside the function f, this keyword refers to the global/window object.
 

//Guess the outputs of the following code:

// Code 1

(function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);

// Code 2

// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

function bigFunc(element){
  let newArray = new Array(700).fill('♥');
  return newArray[element];
}

console.log(bigFunc(599)); // Array is created
console.log(bigFunc(670)); // Array is created again

// Code 3

// The following code outputs 2 and 2 after waiting for one second
// Modify the code to output 0 and 1 after one second.

function randomFunc(){
  for(var i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}
randomFunc();

//Code 1 - Outputs 45.

// Even though a is defined in the outer function, due to closure the inner functions have access to it.

// Code 2 - This code can be modified by using closures,

function bigFunc(){
  let newArray = new Array(700).fill('♥');
  return (element) => newArray[element];
}

let getElement = bigFunc(); // Array is created only once
getElement(599);
getElement(670);  

//Code 3 - Can be modified in two ways:

//Using let keyword:

function randomFunc(){
  for(let i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}
randomFunc(); 
// Using closure:

function randomFunc(){
  for(var i = 0; i < 2; i++){
  (function(i){
      setTimeout(()=>console.log(i),1000);
    })(i);
  }
}
randomFunc();


// Write a function that performs binary search on a sorted array.

function binarySearch(arr,value,startPos,endPos){
  if(startPos > endPos) return -1;

  let middleIndex = Math.floor(startPos+endPos)/2;

  if(arr[middleIndex] === value) return middleIndex;

  elsif(arr[middleIndex] > value){
    return binarySearch(arr,value,startPos,middleIndex-1);
  } else{
    return binarySearch(arr,value,middleIndex+1,endPos);
  }
}   


//  Implement a function that returns an updated array with r right rotations on an array of integers a

function rotateRight(arr,rotations){
  if(rotations == 0) return arr;
  for(let i = 0; i < rotations;i++){
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}
rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]   


// Write the code for dynamically inserting new components.

<html> 
<head> 
<title>inserting new components dynamically</title> 
<script type="text/javascript"> 
    function addNode () { var newP = document. createElement("p"); 
    var textNode = document.createTextNode(" This is other node"); 
    newP.appendChild(textNode); document.getElementById("parent1").appendChild(newP); } 
</script> 
</head> 
<body> <p id="parent1">firstP<p> </body> 
</html>


// Write the code given If two strings are anagrams of one another, then return true.

var firstWord = "Deepak";
var secondWord = "Aman";

isAnagram(wordOne, wordTwo); // true

function isAnagram(one, two) {
  //Change both words to lowercase for case insensitivity..
  var a = one.toLowerCase();
  var b = two.toLowerCase();

  // Sort the strings, then combine the array to a string. Examine the outcomes.
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}


// Write the code to find the vowels

const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}

// In JavaScript, how do you turn an Object into an Array []?

let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "work"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "user22r", "26", "programmer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "user22"],["age", "26"],["work", “programmer"]]

// What is the output of the following code?

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

{/* 1
2
3
4
5
6
7
8
9
10
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined */}


{/* JavaScript Fundamentals
Writing JavaScript code in an HTML page: We must enclose the JavaScript code within the <script> tag in order to include it on an HTML page just as the example shown below:
<script type = "text/javascript">
//JavaScript coding can be done inside this tag
</script> */}
{/* 
With this information, the browser can correctly make out that the code is written in JavaScript and execute the code.

Inclusion of external JavaScript files in an HTML file: An external JavaScript file can also be written separately and included within our HTML file. That way, different types of code can be kept isolated from one another, resulting in better-organised files. For instance, if our JavaScript code is written in the file script.js, we can include it in our HTML file in the following way:
<script src="script.js"></script>
Usage of Comments in JavaScript coding: Comments are extremely useful in programming because they can assist others to understand what's going on in your code or they can help you if you have forgotten something. Keep in mind that they must be correctly identified so that the browser does not attempt to execute them. There are two alternatives available in JavaScript in which we can add comments:
Single-line comments: If you want to include a single line comment, start it with "//".
Multi-line comments: If you want to write a comment that spans multiple lines, you can wrap it in /* and */ to prevent it from being executed. */}

// 2. Javascript Variables

Variables in JavaScript are simply names of storage locations. In other words, they can be considered as stand-in values that we can use to perform various operations in our JavaScript codes. JavaScript allows the usage of variables in the following three ways:

var: The most commonly used variable in JavaScript is var. It can be redeclared and its value can be reassigned, but only inside the context of a function. When the JavaScript code is run, variables defined using var are moved to the top. An example of a variable declared using the "var" keyword in JavaScript is shown below:
var x = 140; //  variable x can be reassigned a new value and also redeclared
const: const variables in JavaScript cannot be used before they appear in the code. They can neither be reassigned values, that is, their value remains fixed throughout the execution of the code, nor can they be redeclared. An example of a variable declared using the "const" keyword in JavaScript is shown below:
const x = 5; // variable x cannot be reassigned a new value or redeclared
let: The let variable, like const, cannot be redeclared. But they can be reassigned a value. An example of a variable declared using the "let" keyword in JavaScript is shown below:
let x = 202; // variable x cannot be redeclared but can be reassigned a new value

// Javascript Data Types

Different types of values and data can be stored in JavaScript variables. To assign values to JavaScript variables, you use the equals to "=" sign operator. The various data types in JavaScript are as follows:

Numbers: These are just numerical values. They can be real numbers or integers. An example of the numbers data type is shown below: var id = 100
Variables: The variable data type, as the name suggests, does not have a fixed value. An example of the variables data type is shown below: var y
Text (strings): String data types of JavaScript are a combination of multiple characters. An example of the string data type is shown below: var demoString = "Hello World"
Operations: Operations in JavaScript can also be assigned to JavaScript variables. An example of these is shown below: var sum = 20 + 30 + 29
Boolean values: Boolean values can be true or false. An example of the boolean data type is shown below: var booleanValue = true
Constant numbers: As the name suggests, these data types have a fixed value. An example of the constant data type is shown below: const g = 9.8
Objects: JavaScript objects are containers for named values called properties. They possess their own data members and methods. An example of the objects data type is shown below:
var name = {name:"Jon Snow", id:"AS123"}

// JavaScript Operators

You can use variables to conduct a variety of tasks using JavaScript operators. The various types of operators in JavaScript are as follows:

Fundamental Operators: These operators are used to perform basic operations like addition, multiplication, etc. in JavaScript. A list of all the Fundamental operators in JavaScript is as follows:
+: The Addition Operator is used to add two numbers
-: The Subtraction Operator is used to subtract two numbers
*: The MultiplicationOperator is used to multiply two numbers
/: The Division Operator is used to divide two numbers
(...): In general, operations within brackets are executed earlier than that outside. This grouping operator surrounds an expression or sub-expression with a pair of parentheses to override the conventional operator precedence, allowing operators with lower precedence to be evaluated before operators with higher precedence. It does exactly what it says: it groups the contents of the parentheses.
%: The Modulus operator is used to get the remainder when an integer number is divided by another integer number.
++: The Increment operator is used to increase the value of numbers by one.
--: The Decrement operator is used to decrease the value of numbers by one.
Bitwise Operators:  All the operations dealing with the bits of the numbers can be performed by the bitwise operators in JavaScript. A list of all the Bitwise operators in JavaScript is as follows:
&: The bitwise AND operator returns a 1 in every bit position where both operands' corresponding bits are 1.
|:  The bitwise OR operator (|) returns a 1 in each bit position where either or both operands' corresponding bits are 1.
~: The bitwise NOT operator reverses the operand's bits. It turns the operand into a 32-bit signed integer, just like other bitwise operators.
^: The bitwise XOR operator () returns a 1 in each bit position where the corresponding bits of both operands are 1s but not both.
<<: The left shift operator shifts the first operand to the left by the provided number of bits. Extra bits that have been relocated to the left are discarded. From the right, zero bits are shifted in.
>>: The right shift operator (>>) moves the first operand to the right by the provided number of bits. Extra bits that have been relocated to the right are discarded. The leftmost bit's copies are shifted in from the left. The sign bit (the leftmost bit) does not change since the new leftmost bit has the same value as the old leftmost bit. As a result, the term "sign-propagating" was coined.
Comparison Operators:  A list of all the Comparison operators in JavaScript is as follows:
==: The equality operator (==) returns a Boolean value when its two operands are equal. It tries to convert and compare operands of different kinds, unlike the rigorous equivalent operator.
===: The equivalent operator (===) returns a Boolean value when its two operands are equal and they have the same type. It tries to convert and compare operands of the same kinds, unlike the equality operator.
!=: The inequality operator (!=) returns a Boolean value if the two operands are not equal. It tries to convert and compare operands of different kinds, unlike the rigorous inequivalent operator.
!==: The inequivalent operator (!=) returns a Boolean value if the two operands are not equal or they are not of the same type. It tries to convert and compare operands of the same kinds, unlike the inequality operator.
?: The conditional (ternary) operator is the only one in JavaScript that takes three operands: a condition followed by a question mark (? ), an expression to execute if the condition is true followed by a colon (:), and lastly an expression to execute if the condition is false. As an alternative to an if...else statement, this operator is commonly used.>: The Greater than operator returns true if the operand to its left is greater in value than the operand to its right.
<: The Lesser than operator returns true if the operand to its left is lesser in value than the operand to its right.
>=: The Greater than equals to operator returns true if the operand to its left is greater in value or equal in value than the operand to its right.
<=: The Lesser than equals to operator returns true if the operand to its left is lesser in value or equal in value than the operand to its right.
Logical Operators:  A list of all the Logical operators in JavaScript is as follows:
&&: If and only if all of the operands are true, the logical AND operator (logical conjunction) for a set of Boolean operands is true. It will be false if it is not. When evaluating from left to right, the operator returns the value of the first falsy operand encountered, or the value of the last operand if all operands are truth.
||: If and only if one or more of its operands are true, the logical OR operator (logical disjunction) is true for a set of operands. It's most often used with logical (Boolean) values. It returns a Boolean value when this is the case. The || operator, on the other hand, returns the value of one of the provided operands, hence using it with non-Boolean values will result in an error.
!: The logical NOT operator (logical complement, negation) converts truth to falsity. It's most commonly used with logical (Boolean) values. It returns false if its sole operand can be transformed to true when used with non-Boolean values; otherwise, it returns true.



JavaScript If-Else Statements

The if-else statements are simple to comprehend. You can use them to set conditions for when your code runs. If specific requirements are met, something is done; if they are not met, another action is taken. The switch statement is a concept that is comparable to if-else. The switch however allows you to choose which of several code blocks to run. The syntax of if-else statements in JavaScript is given below:

if (check condition) {
   // block of code to be executed if the given condition is satisfied
} else {
   // block of code to be executed if the given condition is not satisfied
}
Loops in JavaScript:

Most programming languages include loops. They let you run code blocks as many times as you like with different values. Loops can be created in a variety of ways in JavaScript:

the for loop: The most frequent method of creating a loop in JavaScript. Its syntax is shown below:
for (initialization of the loop variable; condition checking for the loop; updation after the loop) {
   // code to be executed in loop
}
the while loop: Establishes the conditions under which a loop will run. Its syntax is shown below:
// Initialization of the loop variable is done before the while loop begins
while(condition checking for the loop){
// 1. code to be executed in loop
// 2. updation of the loop variable
}
the do-while loop: Similar to the while loop, but it runs at least once and checks at the end to see whether the condition is met to run again. Its syntax is shown below:
// Initialization of the loop variable is done before the do-while loop begins
do{
// 1. code to be executed in loop
// 2. updation of the loop variable
}while(condition checking for the loop);
There are two statements that are important in the context of loops:

the continue statement: Skip parts of the loop if certain conditions are met.
break statement: Used to stop and exit the cycle when specific conditions are met.

//JavaScript Arrays

Arrays are the next item on our JavaScript cheat sheet. Arrays are used in a variety of programming languages. They are a method of categorising variables and attributes. Arrays can be defined as a collection of objects of the same type. In JavaScript, here's how one can make an array of cars:

var cars = ["Mercedes", "Tesla","Volvo"];
Now that we understand how to make arrays, we can perform a bunch of operations on them. Let us take a look at some JavaScript methods which can be used to perform various types of operations on arrays:

pop(): This method is used for removing the last element of an array.
push(): This method is used for adding a new element at the very end of an array.
concat(): This method is used for joining various arrays into a single array.
reverse(): This method is used for reversing the order of the elements in an array.
shift(): This method is used for removing the first element of an array.
slice(): This method is used for pulling a copy of a part of an array into a new array.
splice(): This method is used for adding elements in a particular way and position.
toString(): This method is used for converting the array elements into strings.
unshift(): This method is used for adding new elements at the beginning of the array.
valueOf(): This method is used for returning the primitive value of the given object.
indexOf(): This method is used for returning the first index at which a given element is found in an array.
lastIndexOf(): This method is used for returning the final index at which a given element appears in an array.
join(): This method is used for combining elements of an array into one single string and then returning it.
sort(): This method is used for sorting the array elements based on some condition.


JavaScript Functions


JavaScript Functions can be defined as chunks of code written in JavaScript to perform a single task. A function in JavaScript looks like this:

function nameOfTheFunction(parameterOne, parameterTwo, parameterThree, parameterFour,....,parameterN) {
   // Job or Task of the function 
}
The code above consists of the "function" keyword and a name, as you can see. The parameters of the function are enclosed in brackets, while the function's task code and output is enclosed in curly brackets. You can make your own, but there are a few default functions to make your life easier. Although we will be discussing various methods throughout this cheat sheet, let us discuss in brief two important types of JavaScript functions in this section:

Functions For Throwing Data As Output: The output of data is a common application for functions. You have the following options for outputting data:
prompt(): This function is used for creating a dialogue box for taking input from the user.
alert(): This function is used for outputting information in an alert box in the browser window
console.log(): This function is used for writing data to the browser's console and is used for the purpose of debugging code by developers.
document.write(): This function is used for writing straight to our HTML document
confirm(): This function is used for opening up a yes or no dialogue box and for returning a boolean value depending upon the user's click
Global Functions: Every browser that can run JavaScript has a set of global functions built-in. Some of them are as follows:
parseFloat(): This function is used for parsing the argument passed to it and returning a floating-point number.
parseInt(): This function is used for parsing the argument passed to it and returning an integral number.
encodeURI(): This function is used for encoding a URI into a UTF-8 encoding scheme.
decodeURI(): This function is used for decoding a Uniform Resource Identifier (URI) made by encodeURI() function or similar functions.
encodeURIComponent(): This function is used for the same purpose as encodeURI() only for URI components.
decodeURIComponent(): This function is used for decoding a URI component.
isNaN(): This function is used for determining if a given value is Not a Number or not.
Number(): This function is used for returning a number converted from what is passed as an argument to it.
eval(): This function is used for evaluating JavaScript programs presented as strings.
isFinite(): This function is used for determining if a passed value is finite or not.


8. Scope and Scope Chain in JavaScript

1. Scope: The accessibility or visibility of variables in JavaScript is referred to as scope. That is, which sections of the program can access a given variable and where the variable can be seen. There are usually three types of scopes:

Global Scope: The global scope includes any variable that is not contained within a function or block (a pair of curly braces). Global scope variables can be accessed from anywhere in the program. An example showing the global scope of a variable is given below:
var hello = 'Hello!';
function sayHello() {
 console.log(hello);
}
// 'Hello!' gets logged
sayHello();
Local or Function Scope: Variables declared inside a function are local variables. They can only be accessed from within that function; they are not accessible from outside code. An example showing local scope of a variable is given below:
function sayHello() {
 var hello = 'Hello!';
 console.log(hello);
}
// 'Hello!' gets logged
sayHello();
console.log(hello); // Uncaught ReferenceError: hello is not defined

Block Scope: Unlike var variables, let and const variables can be scoped to the nearest pair of curly brackets in ES6. They can't be reached from outside that pair of curly braces, which means they can't be accessed from the outside. An example showing the block scope of a variable is given below:
{
 let hello = 'Hello!';
 var language = 'Hindi';
 console.log(hello); // 'Hello!' gets logged
}
console.log(language); // 'Hindi!' gets logged
console.log(hello); // Uncaught ReferenceError: hello is not defined


2. Scope Chain: When a variable is used in JavaScript, the JavaScript engine searches the current scope for the variable's value. If it can't find the variable in the inner scope, it will look into the outer scope until it finds it or reaches the global scope.

If it still can't identify the variable, it will either return an error or implicitly declare the variable in the global scope (if not in strict mode). Let us take into consideration the following example:

let a = 'a';
function foo() {
 let b = 'b';
 console.log(b); // 'b' gets logged
 console.log(a); // 'a' gets logged
 randomNumber = 33;
 console.log(randomNumber);  // 33 gets logged
}
foo();
When the function foo() is called, the JavaScript engine searches for the 'b' variable in the current scope and finds it. Then it looks for the 'a' variable in the current scope, which it can't find, so it moves on to the outer scope, where it finds it (i.e global scope).

After that, we assign 33 to the 'randomNumber' variable, causing the JavaScript engine to search for it first in the current scope, then in the outer scope.

If the script isn't in strict mode, the engine will either create a new variable called randomNumber and assign 33 to it, or it will return an error (if not in strict mode).

As a result, the engine will traverse the scope chain till the time when a variable is found.

9. JavaScript Hoisting
Prior to executing the code, the interpreter appears to relocate the declarations of functions, variables, and classes to the top of their scope using a process known as Hoisting in JavaScript. Functions can be securely utilised in code before they have been declared thanks to hoisting. Variable and class declarations are likewise hoisted, allowing them to be referenced prior to declaration. It should be noted that doing so can result in unforeseen mistakes and is not recommended. There are usually two types of Hoisting:

Function Hoisting: Hoisting has the advantage of allowing you to use a function before declaring it in your code as shown in the code snippet given below. Without function hoisting, we would have to first write down the function display and only then can we call it.
display("Lion");
function display(inputString) {
 console.log(inputString); // 'Lion' gets logged 
}
Variable Hoisting: You can use a variable in code before it is defined and/or initialised because hoisting works with variables as well. JavaScript, however, only hoists declarations, not initializations! Even if the variable was initially initialised then defined, or declared and initialised on the same line, initialization does not occur until the associated line of code is run. The variable has its default initialization till that point in the execution is reached (undefined for a variable declared using var, otherwise uninitialized). An example of variable hoisting is shown below:
console.log(x) // 'undefined' is logged from hoisted var declaration (instead of 7)
var x // Declaration of variable x
x = 7; // Initialization of variable x to a value 7
console.log(x); // 7 is logged post the line with initialization's execution.


10. JavaScript Closures
A closure is a function that has been bundled together (enclosed) with references to its surroundings (the lexical environment). In other words, a closure allows an inner function to access the scope of an outside function. Closures are formed every time a function is created in JavaScript, during function creation time. An example of closures in Javascript is given below:

function subtractor(subtractingInteger) {
 return function(a) {
   return a - subtractingInteger;
 };
}
var subtract2 = subtractor(2);
var subtract5 = subtractor(5);
console.log(subtract2(5));  // 3 is logged
console.log(subtract5(5)); // 0 is logged
In this example, we have developed a function subtractor(subtractingInteger) that takes a single parameter subtractingInteger and returns a new function. Its return function accepts only one input, a, and returns the difference of a and subtractingInteger. The function 'subtractor' is essentially a function factory. It creates functions that have the ability to subtract a specified value from their arguments. The function factory creates two new functions in the example above: one that subtracts 2 from its argument and one that subtracts 5 from its arguments. Both subtract2 and subtract5 are closures. They have the same function body definition, but they hold lexical surroundings that are distinct. subtractingInteger is 2 in subtract2's lexical environment, but subtractingInteger is 5 in subtract5's lexical environment.

11. JavaScript Strings
As mentioned earlier, Strings are nothing but a combination of characters that can be used to perform a variety of tasks. JavaScript provides so many methods for Strings alone that it makes sense to cover Strings as a standalone topic in this cheat sheet. Let us now look at the various escape sequences in JavaScript and the methods which JavaScript provides for strings:

Escape Sequences or Escape Characters: An escape character is a character in computers and telecommunications that causes the following characters in a character sequence to take on a different meaning. Metacharacters include escape characters, which are a subset of metacharacters. In general, whether something is an escape character or not is determined by the context. For instance, Strings in JavaScript are delimited by single or double-quotes. You must use special characters in a string if you want to utilise quote marks. A few of the escape characters allowed by JavaScript are as follows:
\' — Single quotes
\" — Double quotes
\t — Horizontal tab
\v — Vertical tab
\\ — Backslash
\b — Backspace
\f — Form feed
\n — Newline
\r — Carriage return
String methods: As mentioned earlier, JavaScript provides a lot of methods to manipulate its Strings. Let us take a look at some of them:
toLowerCase() — This method is used for converting strings to lower case
toUpperCase() — This method is used for converting strings to upper case
charAt() — This method is used for returning the character at a particular index of a string
charCodeAt() — This method is used for returning to us the Unicode of the character at a  given index
fromCharCode() — This method is used for returning a string made from a particular sequence of UTF-16 code units
concat() — This method is used for concatenating or joining multiple strings into a single string
match() — This method is used for retrieving the matches of a string against a pattern string which is provided
replace() — This method is used for finding and replacing a given text in the string
indexOf() — This method is used for providing the index of the first appearance of a given text inside the string
lastIndexOf() — This method is similar to the indexOf() methods and only differs in the fact that it searches for the last occurrence of the character and searches backwards
search() — This method is used for executing a search for a matching text and returning the index of the searched string
substr() —  This method is pretty much the same as the slice() method but the extraction of a substring in it depends on a given number of characters
slice() — This method is used for extracting an area of the string and returning it
split() — This method is used for splitting a string object into an array of strings at a particular index
substring() — Even this method is almost the same as the slice() method but it does not allow negative positions
valueOf() — This method is used for returning the primitive value (one without any properties or methods) of a string object

12. Document Object Model (DOM) in JavaScript

Document Object Model (DOM) in JavaScript
The Document Object Model (DOM) is the structure of a webpage's code. There are many different ways to build and alter HTML elements with JavaScript (called nodes). 

Node Properties: Let us first take a look at some of the properties of a JavaScript DOM node:
attributes — Gets a live list of all the characteristics associated with an element.
baseURI — Returns an HTML element's absolute base URL.
childNodes — Returns a list of the child nodes of an element.
firstChild — Returns the element's first child node.
lastChild — An element's final child node
nextSibling — Returns the next node in the same node tree level as the current node.
nodeName —Returns a node's name.
nodeType — Returns the node's type.
nodeValue — Sets or returns a node's value.
ownerDocument — This node's top-level document object.
parentNode — Returns the element's parent node.
previousSibling — Gets the node that comes before the current one.
textContent — Sets or returns a node's and its descendants' textual content.
Node Methods: Let us now take a look at some of the methods provided by JavaScript to manipulate these nodes in the DOM:
appendChild() — Adds a new child node as the last child node to an element.
cloneNode() is a function that duplicates an HTML element.
compareDocumentPosition() — Compares two elements' document positions.
getFeature() returns an object that implements the APIs of a feature.
hasAttributes() — If an element has any attributes, it returns true; otherwise, it returns false.
hasChildNodes() — If an element has any child nodes, it returns true; otherwise, it returns false.
insertBefore() — Adds a new child node to the left of an existing child node.
isDefaultNamespace() returns true if a given namespaceURI is the default, and false otherwise.
isEqualNode() — Determines whether two elements are the same.
isSameNode() — Determines whether two elements belong to the same node.
isSupported() — Returns true if the element supports the provided feature.
lookupNamespaceURI() — Returns the namespace URI for a specific node.
lookupPrefix — If the prefix for a given namespace URI is present, lookupPrefix() returns a DOMString containing it.
normalise() — In an element, joins neighbouring text nodes and removes empty text nodes.
removeChild() — Removes a child node from an element using the Child() method.
replaceChild() — In an element, this function replaces a child node.
Element Methods: Given below are some of the element methods provided by JavaScript:
getAttribute() — Returns the value of an element node's provided attribute.
getAttributeNS() returns the string value of an attribute with the namespace and name supplied.
getAttributeNode() — Returns the attribute node supplied.
getAttributeNodeNS() — Returns the attribute node for the specified namespace and name for the attribute.
getElementsByTagName() — Returns a list of all child elements whose tag name is supplied.
getElementsByTagNameNS() — Returns a live HTMLCollection of items belonging to the provided namespace with a certain tag name.
hasAttribute() — If an element has any attributes, it returns true; otherwise, it returns false.
hasAttributeNS() returns true or false depending on whether the current element in a particular namespace has the supplied attribute.
removeAttribute() — Removes an element's supplied attribute.
removeAttributeNS() — Removes an attribute from an element in a specific namespace.
setAttributeNode() — Sets or modifies an attribute node.
setAttributeNodeNS() — Sets a new namespaced attribute node to an element with setAttributeNodeNS().


13. JavaScript Data Transformation

Data Transformation in JavaScript can be done with the usage of higher-order functions. Higher-order functions are those functions in JavaScript which can accept one or more functions as inputs and return a function as the result. All higher-order functions that take a function as input are map(), filter(), and reduce(). Let us now take a look at how these functions can be used. One thing to note over here is that because all of these functions are part of the JavaScript Array prototype, they can be used directly on an array.

map() method: The map method applies a function to each array element. The callback function receives each element of the array and returns a new array of the same length. This method can be used to conduct the same operation/transformation on each element of an array and return a new array with the modified values of the same length. An example of the usage of the map() method is given below:

var arr = [10,20,30];
var triple  = arr.map(x => x * 3);
triple; // [30,60,90]
filter() method:  Using the filter() method, items that do not meet a criterion are removed from the array. The callback function receives every element of the array. If the callback returns true on each iteration, the element will be added to the new array; otherwise, it will not be added. An example of the usage of the filter() method is given below:

var arr = [13,40,47];
var odd = arr.filter(x => x % 2);
odd; // [13,47]
reduce() method: The reduce() method can combine the items of an array into a single value. When using reduce, we must declare the accumulator's beginning value (final result). Each iteration, we do some operation inside the callback, which is then added to the accumulator. An example of the usage of the reduce() method is given below:

var arr = [10,20,30];
var counter = 0;
let answer = arr.reduce((accumulator, value) => value + accumulator, counter);
console.log(answer) // answer = 10 + 20 + 30 = 60


14. JavaScript Regular Expressions

Regular expressions can be defined as search patterns that can be used to match string character combinations. Text search and text to replace procedures can both benefit from the search pattern. Let us look at how JavaScript allows Regular Expressions:

Pattern Modifiers: Following are the pattern modifiers that are allowed in JavaScript:
e —  This is used for evaluating replacement
i — This is used for performing case-insensitive matching
U — This is used for ungreedy pattern
g — This is used for performing global matching
m — This is used for performing multiple line matching
s — This is used for treating strings as a single line
x — This is used for allowing comments and whitespace in the pattern
Metacharacters: Following are the metacharacters that are allowed in JavaScript:
. — This is used for finding a single character, except newline or line terminator
\w — This is used for finding Word characters
\W — This is used for finding Non-word characters
\s — This is used for finding Whitespace characters
\S — This is used for finding Non-whitespace characters
\b — This is used for finding matches at the beginning or at the end of a word
\B — This is used for finding matches not at the beginning or at the end of a word
\0 — This is used for finding NULL characters
\n — This is used for finding a new line character
\f — This is used for finding a Form feed character
\r — This is used for finding a Carriage return character
\t — This is used for finding a Tab character
\v — This is used for finding a Vertical tab character
\d — This is used for finding digits
\D — This is used for finding non-digit characters
\xxx — This is used for finding characters given by an octal number xxx
\xdd — This is used for finding characters given by a hexadecimal number dd
\uxxxx — This is used for finding the Unicode character given by a hexadecimal number XXXX
Brackets: You can group parts of a regular expression together by putting them inside round brackets or parentheses. You can use this to apply a quantifier to the entire group or to limit the alternation to a specific area of the regex. For grouping, only parenthesis can be used. A character class is defined by square brackets, while a quantifier with precise bounds is defined by curly braces. Let us look at some of the brackets which JavaScript allows:
[abc] — This is used for finding all the characters between the brackets
(a|b|c) — This is used for finding all of the alternatives separated with |
[^abc] — This is used for finding every character that is not in the brackets
[0-9] — This is used for finding each digit from 0 to 9
[A-z] — This is used for finding each character from uppercase A to lowercase z
Quantifiers: Quantifiers provide the minimum number of instances of a character, group, or character class in the input required to find a match. The quantifiers supported by JavaScript are listed in the table below.
n+ — This is used for matching each string which is having one or more n
n* — This is used for matching any string which is having zero or more occurrences of n
n? — This is used for matching strings which are having zero or one occurrence of n
^n — This is used for matching strings with n in the first place
?=n — This is used for matching all strings which are followed by a particular string n
?!n — This is used for matching strings that are not followed by a particular string ni
n{X} — This is used for matching strings that contain a sequence of X n’s
n{X,Y} — This is used for matching a string that contains a sequence of X to Y n’s
n{X,} — This is used for matching all strings which are having a sequence of X or more n’s
n$ — This is used for matching all strings having n at the end.


15. Numbers and Mathematics in JavaScript


JavaScript provides various properties and methods to deal with Numbers and Maths. Let us have a quick look at those:

Numbers Properties:
MAX VALUE — The maximum numeric value that JavaScript can represent.
NaN — The "Not-a-Number" value is NaN.
NEGATIVE INFINITY – The value of Infinity is negative.
POSITIVE INFINITY – Infinity value that is positive.
MIN VALUE — The smallest positive numeric value that JavaScript can represent.
Numbers Methods:
toString() — Returns a string representation of an integer.
toFixed() — Returns a number's string with a specified number of decimals.
toPrecision() — Converts a number to a string of a specified length.
valueOf() — Returns a number in its original form.
toExponential() — Returns a rounded number written in exponential notation as a string.
Maths Properties:
E — Euler's number is E.
SQRT1_2 — 1/2 square root
SQRT2 stands for square root of two.
LOG2E — E's base 2 logarithm
LN2 — The natural logarithm of 2 is LN2.
LN10 — The natural logarithm of ten is LN10.
LOG10E — E's base ten logarithm
PI — PI stands for Pianistic Integer.
Maths Methods:
exp(x) — Ex's value
floor(x) — x's value rounded to the nearest integer.
log(x) — The natural logarithm (base E) of x is log(x).
abs(x) — Returns the value of x in its absolute (positive) form.
acos(x) — In radians, the arccosine of x.
asin(x) — In radians, the arcsine of x.
pow(x,y) — x to the power of y
random() — Returns a number between 0 and 1 at random.
round(x) — Rounds the value of x to the nearest integer.
sin(x) — The sine of x is sin(x) (x is in radians)
sqrt(x) — x's square root
tan(x) — The angle's tangent
atan(x) is the numeric value of the arctangent of x.
atan2(y,x) — Arctangent of its arguments' quotient
ceil(x) — x's value rounded to the next integer
cos(x) – The cosine of x is cos(x) (x is in radians)
max(x,y,z,...,n) — Returns the highest-valued number.
min(x,y,z,...,n) — The number with the lowest value is the same as the number with the highest value.


16. JavaScript Date Objects

Dates are extremely important to deal with while creating most types of applications. JavaScript also allows you to deal with and change dates and times. The next section of the JavaScript cheat sheet is how to work on dates:

Setting Dates: Dates can be set using the following three ways:
Date() — Returns a new date object that contains the current date and time.
Date(1993, 6, 19, 5, 12, 50, 32) — We can create a custom date object with the pattern as Year, month, day, hour, minutes, seconds, and milliseconds are represented by the numbers. Except for the year and month, we can omit anything we like.
Date("1999-12-22") — Date as a string declaration
Getting the values of Time and Date: The following methods can be used for getting the date and time values in JavaScript:
getDate() returns the month's day as a number (1-31)
getTime() — Get the milliseconds since January 1, 1970
getUTCDate() returns the month's day (day) in the supplied date in universal time (also available for day, month, full year, hours, minutes etc.)
getMilliseconds() — This function returns the milliseconds (0-999)
getMinutes() — Returns the current minute (0-59)
getMonth() returns the current month as a number (0-11)
parse —  It returns the number of milliseconds since January 1, 1970 from a string representation of a date.
getDay() returns a number representing the weekday (0-6)
getFullYear() returns the current year as a four-digit value (yyyy)
getHours() — Returns the current hour (0-23)
getSeconds() — Returns the second number (0-59)
Setting a Part of the Dates: We can set a part of the dates in JavaScript using the following methods:
setDate() — Returns the current date as a number (1-31)
setFullYear() — This function sets the year (optionally month and day)
setMonth() — This function sets the month (0-11)
setSeconds() — This function sets the seconds (0-59)
setTime() — This function is used to set the time (milliseconds since January 1, 1970)
setMinutes() — This function sets the minutes (0-59)
setUTCDate() — According to universal time, sets the day of the month for a given date (also available for day, month, full-year, hours, minutes etc.)
setHours() — Changes the time (0-23)
setMilliseconds() — This function sets the milliseconds (0-999)


17. JavaScript Browser Objects

JavaScript is also capable of taking note of the user's browser activity and incorporating its properties into the code, in addition to HTML elements.

Given below is a list of Window properties that JavaScript can take into account:
history — Provides the window's History object.
innerHeight — The content area of a window's inner height.
innerWidth — The content area's inner width.
closed — Returns true or false depending on whether or not a window has been closed.
pageXOffset — The number of pixels offset from the centre of the page. The current document has been horizontally scrolled.
pageYOffset — The number of pixels offset from the centre of the page. The document has been vertically scrolled.
navigator — Returns the window's Navigator object.
opener — Returns a reference to the window that created the window.
outerHeight — A window's total height, including toolbars and scrollbars.
outerWidth — A window's outside width, including toolbars and scrollbars.
defaultStatus — Changes or restores the default text in a window's status bar.
document — Returns the window's document object.
frames — All <iframe> elements in the current window are returned by frames.
length — Determine how many iframe> elements are in the window.
location — Returns the window's location object.
name — Sets or retrieves a window's name.
parent — The current window's parent window is called parent.
screen — Returns the window's Screen object.
screenLeft — The window's horizontal coordinate (relative to the screen)
screenTop — The window's vertical coordinate.
self — Returns the window that is currently open.
status — Changes or restores the text in a window's status bar.
top — Returns the browser window that is currently at the top of the screen.
screenX — Identical to screenLeft, but required by some browsers
screenY — Identical to screenTop, but required by some browsers
Given below are the JavaScript methods which can work on the user's browser window:
alert() — Shows a message and an OK button in an alert box.
setInterval() — Calls a function or evaluates an expression at intervals defined by the user.
setTimeout() — After a specified interval, calls a function or evaluates an expression.
clearInterval() — Removes a timer that was started with setInterval() ()
clearTimeout() — Removes the timer that was set with setTimeout() ()
open() — This method creates a new browser window.
print() — Prints the current window's content.
blur() — Removes the current window's focus.
moveBy() — Repositions a window with respect to its present position.
moveTo() — This function moves a window to a specific location.
close() — This function closes the currently open window.
confirm() — Shows a dialogue box with a message and buttons to OK and Cancel.
focus() — Sets the current window's focus.
scrollBy() — Scrolls the document by a certain amount of pixels.
scrollTo() — Scrolls the document to the supplied coordinates with the scrollTo() method.
prompt() — Shows a conversation window asking for feedback from the visitor.
resizeBy() — Resizes the window by the number of pixels supplied.
resizeTo() — Resizes the window to the width and height supplied.
stop() — This function prevents the window from loading.
Given below is a list of Screen properties that JavaScript can take into account:
height — The screen's entire height.
pixelDepth — The screen's colour resolution in bits per pixel.
width — The screen's entire width.
colorDepth — Gets the colour palette's bit depth for showing images.
availableHeight — Returns the screen's height (excluding the Windows Taskbar).
availableWidth — Returns the screen's width (excluding the Windows Taskbar).


18. JavaScript Events

Things that can happen to HTML components and are executed by the user in JavaScript are called events. These events can be detected by the programming language, which can then be used to activate code actions. Without them, no JavaScript cheat sheet would be complete. Let us take a look at some of the events supported by JavaScript:

Mouse Events:
onclick – When a user clicks on an element, an event is triggered.
oncontextmenu — When a user right-clicks on an element, a context menu appears.
ondblclick — When a user double-clicks on an element, it is called ondblclick.
onmousedown — When a user moves their mouse over an element, it is called onmousedown.
onmouseenter — The mouse pointer is moved to a certain element.
onmouseleave — The pointer leaves an element.
onmousemove — When the pointer is over an element, it moves.
onmouseover  — When the cursor is moved onto an element or one of its descendants, the term onmouseover is used.
onmouseout — When the user moves the mouse cursor away from an element or one of its descendants, it is called onmouseout.
onmouseup — When a user releases a mouse button while hovering over an element, it is known as onmouseup.
Form Events:
onblur — When an element loses focus, it is called onblur.
onchange — A form element's content changes. (for the input>, select>, and textarea> elements)
onfocus – An aspect is brought into focus.
onfocusin — When an element is ready to become the centre of attention.
onfocusout —The element is about to lose focus.
oninput — When a user inputs something into an element, it's called oninput.
oninvalid — If an element isn't valid, it's called oninvalid.
onreset — The state of a form is reset.
onsearch — A user enters text into a search field (for input="search">).
onselect — The user chooses some text (input> and textarea>).
onsubmit — A form is filled out and submitted.
Drag Events:
ondrag — When an element is dragged, it is called ondrag.
ondragend — The element has been dragged to its final position.
ondragenter — When a dragged element enters a drop target, it is called ondragenter.
ondragleave — When a dragged element departs the drop target, it is called ondragleave.
ondragover — The dropped element is on top of the dragged element.
ondragstart — The user begins dragging an element.
ondrop — When a dragged element is dropped on a drop target, it is called ondrop.
Keyboard Events:
onkeydown — When the user presses a key down
onkeypress — When the user begins to press a key.
onkeyup — A key is released by the user.
Frame Events:
onabort — The loading of a media is aborted with onabort.
onerror — When loading an external file, an error occurs.
onpagehide – When a user leaves a webpage, it is called onpagehide.
onpageshow — When the user navigates to a webpage
onhashchange — The anchor component of a URL has been changed.
onload — When an object has loaded
onresize — The document view gets resized when onresize is called.
onscroll — The scrollbar of an element is being scrolled.onbeforeunload — Before the document is due to be emptied, an event occurs.
onunload — When a page is emptied, this event occurs.
Animation Events:
animationstart — The animation in CSS has begun.
animationend — When a CSS animation is finished, it is called animationend.
animationiteration — CSS animation is repeated using animationiteration.
Clipboard Events:
oncut — The content of an element is cut by the user.
onpaste — When a user pastes material into an element, it is called onpaste.
oncopy — The content of an element is copied by the user.
Media Events:
onloadeddata — Media data has been loaded
onloadedmetadata — Metadata is loaded (such as size and duration).
onloadstart — The browser begins looking for the media that has been specified.
onabort — The loading of media has been halted.
onerror — When an error occurs while loading an external file, the event onerror is triggered.
onpause — Media is paused, either manually or automatically, by the user.
onplay — The video or audio has begun or is no longer paused.
onstalled — The browser is attempting to load the media, but it is not currently accessible.
oncanplay — The browser has the ability to begin playing media (e.g. a file has buffered enough)
oncanplaythrough — The browser is capable of playing media without pausing.
ondurationchange — The media's duration changes.
onended — The media's time has come to an end.
onsuspend — The browser is not loading media on purpose.
ontimeupdate — The situation has shifted (e.g. because of fast forward)
onvolumechange — The volume of the media has changed (including mute)
onwaiting — The media has taken a break, but it is anticipated to resume soon (for example, buffering)
onplaying — Media that has been paused or halted for buffering is now playing.
onprogress — The media is being downloaded by the browser.
onratechange — The media's playback speed changes.
onseeking — The user begins to move/skip.
Miscellaneous Events:
transitionend — When a CSS transition is complete, this event is triggered.
onmessage — The event source has received a message.
onpopstate — When the history of the window changes
onshow — A <menu> element is shown as a context menu when it is onshow.
onoffline — The browser switches to offline mode.
ononline — The browser enters the online mode.
ontouchcancel — The user's ability to touch the screen has been halted.
ontouchstart — The touch-screen is activated by placing a finger on it.
onstorage — An part of Web Storage has been upgraded.
ontoggle — The user toggles the details> element open or closed.
onwheel — The mouse wheel moves up and down when it passes over an element.
ontouchend — A touch-screen user's finger is withdrawn.
ontouchmove — When a finger is dragged over the screen, it is called ontouchmove.

19. JavaScript Event Propagation


Event propagation is a technique that governs how events propagate or travel through the DOM tree to reach their destination, as well as what happens to them once they arrive. Consider the following scenario: you have been given a click event handler to a hyperlink (i.e. <a> element) that's nested inside a paragraph (i.e. <p> element). The handler will now be executed if you click on that link. However, if you set the click event handler to the paragraph containing the link instead of the link, the handler will be triggered regardless of whether the link is clicked. Because events go up and down the DOM tree to reach their target, they don't merely affect the target element that triggered the event. This is known as event propagation.


When an event is fired on an element with parent elements, the above picture shows how the event travels through the DOM tree at different stages of the event propagation. Event propagation in current browsers is divided into two phases: capturing and bubbling.

The Capturing Phase: In the capturing phase, events propagate from the Window down through the DOM tree to the target node. For example, if the user clicks a hyperlink, that click event would pass through the <html> element, the <body> element, and the <p> element containing the link. Also if any ancestor (i.e. parent, grandparent, etc.) of the target element and the target itself has a specially registered capturing event listener for that type of event, those listeners are executed during this phase.
The Bubbling Phase: From the target element up to the Window, the DOM tree visits all of the target element's ancestors one by one. When a user hits a hyperlink, the click event passes via the <p> element containing the link, the <body> element, the <html> element, and the document node, for example. Additionally, if the target element or any of its ancestors have event handlers for that sort of event, those handlers are run during this phase. By default, all event handlers in current browsers are registered at the bubbling phase.


21. JavaScript Memory Allocation and Event Loop

In JavaScript, memory allocation is done in the following regions:

Heap memory: Data is stored in random order and memory is allocated accordingly.

Stack memory: Memory that is allocated in stacks. The majority of the time, it's employed for functions.

The function stack is a function that maintains track of all other functions that are running at the same time. An example to illustrate it is as follows:

function second() {
console.log("Second")
}
function First() {
second()
}
function foo() {
first()
}
foo()
The order in which functions are executed, that is. when they are popped out of the stack once their purpose is completed, is as follows:

console.log
second
first
foo
Event loop: An event loop is something that pulls various things like methods, etc. out of the queue and places it onto the function execution stack whenever the function stack becomes empty. The event loop is the trick to making JavaScript appear multithreaded even if it is only single-threaded. The following illusion clearly explains how the event loop works:


22. JavaScript Error Handling

Various types of errors occur when we are coding in JavaScript. There are a few options for dealing with them:

try — We can define a code block for testing errors using the try block.
catch — We can set up a block of code to execute in the event of an error using the catch statement. 
throw — Instead of the typical JavaScript errors, we can also create custom error messages using the throw statement.
finally — JavaScript also allows us to run our code regardless of the outcome of try and catch.
JavaScript possesses its own inbuilt error object which has the following properties:

name — It is used for setting or returning an error name.
message — It is used for setting or returning the error message as a string.
There are six types of ways in which the error property can return its name. They are as follows:

EvalError — It indicates that an error has occurred within the eval() method.
RangeError — It indicates that some number is “out of range”.
ReferenceError —  It indicates that an illegal reference was occurring.
SyntaxError —  It indicates that a syntax error was occurring.
TypeError —  It indicates that a type error was occurring.
URIError —  It indicates that an encodeURI() error was occurring.

