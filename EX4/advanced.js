// Task 2: rest parameters, spread operator, recursion and callbacks
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log("sum(1, 2, 3) =", sum(1, 2, 3));
console.log("sum(10, 20, 30, 40) =", sum(10, 20, 30, 40));
const values = [8, 3, 15, 6];
console.log("Math.max(...values) =", Math.max(...values));
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("factorial(5) =", factorial(5));
console.log("fibonacci(10) =", fibonacci(10));
function repeat(times, action) {
  for (let i = 1; i <= times; i++) action(i);
}
repeat(3, (i) => console.log("Callback called", i, "time(s)"));
function outer() {
  function inner() { return "inner function result"; }
  return inner();
}
console.log(outer());