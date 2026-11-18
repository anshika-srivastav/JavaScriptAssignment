// Task 1: callbacks - synchronous, asynchronous and error-first
function processNumbers(numbers, callback) {
  const result = [];
  for (const n of numbers) result.push(callback(n));
  return result;
}
console.log(processNumbers([1, 2, 3], (n) => n * 10));
console.log(processNumbers([1, 2, 3], (n) => n + 100));

console.log("1. Start");
setTimeout(() => console.log("3. Callback after 100 ms"), 100);
console.log("2. End of the main code");

function divide(a, b, callback) {
  setTimeout(() => {
    if (b === 0) callback(new Error("Cannot divide by zero"));
    else callback(null, a / b);
  }, 50);
}
divide(10, 2, (err, result) => {
  if (err) console.log("Error:", err.message);
  else console.log("10 / 2 =", result);
});
divide(10, 0, (err, result) => {
  if (err) console.log("Error:", err.message);
  else console.log("10 / 0 =", result);
});