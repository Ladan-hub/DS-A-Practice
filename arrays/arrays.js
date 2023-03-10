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
