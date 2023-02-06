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

// Think about what would happen if one array is shorter than the other array? 

// let's say we want to iterate through two arays and log each pair (you can do a nested loop).
// What would happen if one array was shorted than the other? 

const arr1 = [1,2,3]
const arr2 = [1,2,3,4,5,6]

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++ ) {
        console.log(arr1[i], "------", arr2[j])
    }
}


// function mergeSortedArrays(arr1, arr2) {
//     if (arr1.length === 0) {
//         return arr2
//     } 
//     if (arr2.length === 0) {
//         return arr1
//     }
//     const sortedMerged = [];
//     let ele1 = arr1[0];
//     let ele2 = arr2[0];

//     while(ele1 || ele2) {
//     if (ele2 === undefined || ele1 < ele2) {
//         sortedMerged.push(ele1)
//     }
//     return sortedMerged;

// }



// }

// console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));
