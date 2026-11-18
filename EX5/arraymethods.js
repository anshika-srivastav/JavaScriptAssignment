// Task 2: forEach, map, filter, find and other array methods
const marks = [45, 72, 38, 90, 66, 81];
marks.forEach((m, i) => console.log(`Student ${i + 1}: ${m}`));
console.log("Marks + 5 (map):", marks.map((m) => m + 5));
console.log("Passed (filter):", marks.filter((m) => m >= 40));
console.log("First above 80 (find):", marks.find((m) => m > 80));
console.log("Index of first above 80:", marks.findIndex((m) => m > 80));
console.log("Any failed? (some):", marks.some((m) => m < 40));
console.log("All passed? (every):", marks.every((m) => m >= 40));
const students = [
  { name: "Aman", city: "Bareilly" },
  { name: "Riya", city: "Delhi" },
  { name: "Karan", city: "Bareilly" }
];
console.log("Names:", students.map((s) => s.name));
console.log("From Bareilly:", students.filter((s) => s.city === "Bareilly").map((s) => s.name));