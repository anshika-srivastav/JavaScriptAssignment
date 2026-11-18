// Task 1: global, function and block scope; hoisting
let globalValue = "I am global";
function showScope() {
  let local = "I am local";
  console.log(globalValue, " ", local);
}
showScope();
if (true) {
  var withVar = "var ignores block scope";
  let withLet = "let stays inside the block";
  const withConst = "const also stays inside";
  console.log(withLet, "|", withConst);
}
console.log(withVar);
console.log("typeof withLet outside the block:", typeof withLet);
console.log("Hoisted var before assignment:", hoisted);
var hoisted = 10;
try {
  console.log(notYet);
  let notYet = 5;
} catch (error) {
  console.log(error.name + ":", error.message);
}
let level = "global";
function outer() {
  let level = "outer";
  function inner() { return level; }
  return inner();
}
console.log("Scope chain gives:", outer());