// Task 2: type conversion and type coercion
console.log(Number("42"), Number("3.14"), Number(""), Number("abc"));
console.log(parseInt("42px"), parseFloat("3.14abc"), parseInt("abc"));
console.log(String(123), (255).toString(2), (255).toString(16));
console.log(Boolean(0), Boolean("hello"), Boolean(""), Boolean([]));
console.log("5" + 2); // + joins when one side is a string
console.log("5" - 2); // - converts to numbers
console.log("5" * "2");
console.log(true + 1);
console.log(+{});
console.log(null + 1, undefined + 1);
console.log(+"10" + 5); // unary + converts the string to a number
console.log((12.3456).toFixed(2));