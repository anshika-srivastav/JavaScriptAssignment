// Task 1: creating and using objects
const student = {
  name: "Anshika",
  semester: 3,
  subjects: ["HTML", "CSS", "JavaScript"],
  greet() { return `Hi, I am ${this.name}.`; }
};
console.log(student.name, student["semester"]);
student.city = "Bareilly";
student.semester = 4;
delete student.subjects;
console.log(student.greet());
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student).filter((v) => typeof v !== "function"));
console.log("Entries:");
for (const [key, value] of Object.entries(student)) {
  if (typeof value !== "function") console.log("  ", key, "=", value);
}
console.log("'city' in student:", "city" in student);
console.log("hasOwn 'age':", Object.hasOwn(student, "age"));
const frozen = Object.freeze({ pi: 3.14 });
frozen.pi = 3;
console.log("Frozen object pi:", frozen.pi);
const prop = "marks";
const result = { [prop]: 88, name: "Aman" };
console.log("Computed key:", result);