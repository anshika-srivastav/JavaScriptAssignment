// Task 2: higher-order functions - functions as values and as return values
const operations = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};
function apply(operationName, a, b) {
  return operations[operationName](a, b);
}
console.log(apply("add", 4, 5), apply("multiply", 4, 5));

function myMap(array, fn) {
  const out = [];
  for (let i = 0; i < array.length; i++) out.push(fn(array[i], i));
  return out;
}
function myFilter(array, test) {
  const out = [];
  for (const item of array) if (test(item)) out.push(item);
  return out;
}
console.log("myMap :", myMap([1, 2, 3], (x) => x * x));
console.log("myFilter:", myFilter([5, 12, 8, 130, 44], (x) => x > 10));

const compose = (f, g) => (x) => f(g(x));
const addOne = (x) => x + 1;
const timesTwo = (x) => x * 2;
console.log("compose(addOne, timesTwo)(5) =", compose(addOne, timesTwo)(5));

const words = ["banana", "kiwi", "apple", "fig"];
console.log("Sorted by length:", [...words].sort((a, b) => a.length - b.length));
console.log("Sorted A to Z :", [...words].sort((a, b) => a.localeCompare(b)));