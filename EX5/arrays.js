// Task 1: creating arrays and basic array methods
const fruits = ["apple", "banana", "mango"];
console.log("Array:", fruits, "| length:", fruits.length);
fruits.push("orange"); // add at the end
fruits.unshift("grapes"); // add at the start
console.log("After push and unshift:", fruits);
console.log("pop() removed:", fruits.pop());
console.log("shift() removed:", fruits.shift());
console.log("Now:", fruits);
fruits.splice(1, 1, "kiwi", "papaya"); // remove 1 item at index 1, insert two
console.log("After splice:", fruits);
console.log("slice(1, 3):", fruits.slice(1, 3));
console.log("indexOf('kiwi'):", fruits.indexOf("kiwi"));
console.log("includes('apple'):", fruits.includes("apple"));
console.log("join(' | '):", fruits.join(" | "));
console.log("reverse():", [...fruits].reverse());
const nums = [40, 100, 1, 5, 25];
console.log("Default sort:", [...nums].sort());
console.log("Numeric sort:", [...nums].sort((a, b) => a - b));
console.log("concat:", [1, 2].concat([3, 4], 5));