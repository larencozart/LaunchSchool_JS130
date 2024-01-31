function forEach(array, callback, thisArg) {

  for (let idx = 0; idx < array.length; idx += 1) {
    callback.call(thisArg, array[idx], idx, array);
  }
}


// CHECK GENERAL FUNCTIONALITY
let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));


// CHECK FOR EXECUTION CONTEXT
class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);
[4, 5, 6].forEach(foo.showItem);
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem);

// CHECK FOR CALLBACK'S CURRENT EL, IDX, ARR
["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});