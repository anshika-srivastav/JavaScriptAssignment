// Task 1: function declaration, expression, arrow function and default parameters
function greet(name) {
  return "Hello, " + name + "!";
}
const square = function (n) {
  return n * n;
};
const cube = (n) => n * n * n;
function power(base, exponent = 2) {
  return base ** exponent;
}
function minMax(numbers) {
  return { min: Math.min(...numbers), max: Math.max(...numbers) };
}
console.log(greet("Anshika"));
console.log("square(5) =", square(5));
console.log("cube(3) =", cube(3));
console.log("power(4) =", power(4));
console.log("power(2, 8) =", power(2, 8));
console.log("minMax =", minMax([4, 9, 1, 7]));
console.log("Hoisted call:", add(2, 3)); // a declaration can be called before it is written
function add(a, b) { return a + b; }
(function () {
  console.log("This is an IIFE, it runs immediately.");
})();