// Task 1: reduce
const nums = [12, 5, 8, 20, 3];
const total = nums.reduce((acc, n) => acc + n, 0);
const maximum = nums.reduce((a, b) => (a > b ? a : b));
console.log("Sum :", total);
console.log("Maximum :", maximum);
console.log("Average:", total / nums.length);

const letters = ["a", "b", "a", "c", "b", "a"];
const counts = letters.reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log("Count of letters:", counts);

const people = [
  { name: "Aman", city: "Bareilly" },
  { name: "Riya", city: "Delhi" },
  { name: "Karan", city: "Bareilly" }
];
const byCity = people.reduce((acc, p) => {
  (acc[p.city] = acc[p.city] || []).push(p.name);
  return acc;
}, {});
console.log("Grouped by city:", byCity);

const flat = [[1, 2], [3], [4, 5]].reduce((acc, arr) => acc.concat(arr), []);
console.log("Flattened:", flat);