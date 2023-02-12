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
