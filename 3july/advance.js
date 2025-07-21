//q1
/*function flattenArray(arr) {
  let result = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flattenArray(el)); // recursive call
    } else {
      result.push(el);
    }
  }
  return result;
}

console.log(flattenArray([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]


//q2
function removeDuplicates(arr) {
  const result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1, 1])); // Output: [1, 2, 3]


//q3
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a); // 
//output:-[1, 2, 3, 4]

//q4
function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? null : secondMax;
}

console.log(findSecondLargest([10, 5, 8, 1, 9])); // Output: 9



//q5
function countOccurrences(arr) {
  const counts = {};

  for (let num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  return counts;
}

console.log(countOccurrences([1, 2, 2, 3, 1, 1]))


//q6
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {

    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }

  return result;
};


const nums = [1, 2, 3];
const doubled = nums.myMap(x => x * 2);
console.log(doubled);


//q7
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
];

people.sort((a, b) => {

  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;


  return a.age - b.age;
});

console.log(people);

//q8

function isPrime(num) {
  if(num < 2){
    return false;
  }

  for(let i=2; i<num; i++){
    if(num % i === 0){
      return false;
    }
  }

  return true;
}

function getPrimes(arr){
  let primes = [];

  for(let i=0; i<arr.length; i++){
    if(isPrime(arr[i])){
      primes.push(arr[i]);
    }
  }

  return primes;
}

let nums = [1,2,3,4,5,6,7,8,9,10];
let result = getPrimes(nums);
console.log(result);

*/
//q9
/*
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr[0]); // otput will be undefined
*/

//q10
/*
let nums = [1, 2, 3];

// forEach just runs the function for each item, but doesn't return anything
nums.forEach(function(n) {
  console.log(n * 2);  // prints 2, 4, 6
});

// map runs the function and returns a new array with the result
let newArr = nums.map(function(n) {
  return n * 2;
});

console.log(newArr);  // [2, 4, 6]
*/
//q11
/*
const a = [1, 2, 3];
const b = a.slice(0, 2);
b[0] = 100;
console.log(a); // ?
// output will be const a = [1, 2, 3];
const b = a.slice(0, 2); // b is [1, 2], copied from a

b[0] = 100;  // only changes b, not a

console.log(a); // Output: [1, 2, 3]
*/

//q12
/*
function findPairs(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}

let nums = [1, 2, 3, 4, 5];
let pairs = findPairs(nums, 6);
console.log(pairs); 
*/

//q13
/*
function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

let nums = [1, 2, 3, 4, 5, 6];
let chunks = chunkArray(nums, 2);
console.log(chunks); // Output: [ [1, 2], [3, 4], [5, 6] ]
*/


//q14
let arr = [1, 2, 3, 4];

let total = arr.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(total); // Output: 10

//q15
//When you use .splice() to add or remove items in the middle of an array, JavaScript has to move all the items after it.

