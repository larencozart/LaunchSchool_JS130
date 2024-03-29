function reduce(array, callback, initialValue = array[0]) {
  let result = initialValue;
  let index;

  if (initialValue === array[0]) {
    index = 1;
  } else {
    index = 0;
  }

  for (index; index < array.length; index += 1) {
    result = callback(result, array[index], index, array);
  }
  
  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]


// if (Array.isArray(result)) {
//   for (let index = 0; index < array.length; index += 1) {
//     //
//   }
// } else if ((!Array.isArray(result)) && (typeof initialValue === "object")) {
//   for (let index = 0; index < array.length; index += 1) {
//     //
//   }
// } else {