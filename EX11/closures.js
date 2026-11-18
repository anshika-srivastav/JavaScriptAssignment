// Task 2: closures, private data and function factories
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count
  };
}
const c1 = createCounter();
const c2 = createCounter();
c1.increment(); c1.increment(); c1.increment(); c1.decrement();
c2.increment();
console.log("c1 =", c1.value(), "| c2 =", c2.value());
console.log("Direct access to count:", c1.count);

function multiplier(factor) {
  return (number) => number * factor;
}
const double = multiplier(2);
const triple = multiplier(3);
console.log("double(8) =", double(8), "| triple(8) =", triple(8));

function greeter(greeting) {
  return function (name) { return `${greeting}, ${name}!`; };
}
console.log(greeter("Good morning")("Anshika"));
console.log(greeter("Welcome")("students"));