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
