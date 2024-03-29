function filter(array, callback, thisArg) {
  let filteredArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (callback.call(thisArg, array[index], index, array)) {
      filteredArray.push(array[index]);
    }
  }
  
  return filteredArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
console.log(filter(numbers, (_num, idx) => idx % 2 === 0));