// Task 1: setTimeout, clearTimeout and the execution order
console.log("1. Script starts");
setTimeout(() => console.log("4. Timeout of 0 ms (runs after the main code)"), 0);
setTimeout(() => console.log("5. Timeout of 100 ms"), 100);
const cancelled = setTimeout(() => console.log("This line never prints"), 50);
clearTimeout(cancelled);
Promise.resolve().then(() => console.log("3. Promise callback (runs before timers)"));
setTimeout((name, course) => console.log("6. Arguments passed:", name, course), 150, "Anshika", "CSE");
console.log("2. Script ends");