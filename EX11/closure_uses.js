// Task 3: closures in loops, once() and memoization
var fnsVar = [];
for (var i = 0; i < 3; i++) fnsVar.push(() => i);
console.log("var loop:", fnsVar.map((f) => f()));

let fnsLet = [];
for (let j = 0; j < 3; j++) fnsLet.push(() => j);
console.log("let loop :", fnsLet.map((f) => f()));

function once(fn) {
  let done = false, result;
  return function (...args) {
    if (!done) { result = fn(...args); done = true; }
    return result;
  };
}
const init = once(() => { console.log("Initialising..."); return "ready"; });
console.log(init());
console.log(init());

function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) { console.log("cache hit for", n); return cache[n]; }
    console.log("computing for", n);
    return (cache[n] = fn(n));
  };
}
const slowSquare = memoize((n) => n * n);
console.log(slowSquare(9));
console.log(slowSquare(9));
console.log(slowSquare(4));