// Task 1: first script, variables and template literals
console.log("Hello, World!");
console.log("My name is Anshika Srivastav");
let course = "B.Tech CSE";
const semester = 3;
var section = "A";
console.log("Course:", course);
console.log(`Semester ${semester}, Section ${section}`);
course = "B.Tech Computer Science";
console.log("Updated course:", course);
try {
  semester = 4; // a const cannot be reassigned
} catch (error) {
  console.log("Error:", error.message);
}