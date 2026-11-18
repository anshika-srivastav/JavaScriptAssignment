// Task 2: an array of objects in JSON
const jsonData = `[
  { "id": 1, "name": "Aman", "marks": 78 },
  { "id": 2, "name": "Riya", "marks": 91 },
  { "id": 3, "name": "Karan", "marks": 35 }
]`;
const students = JSON.parse(jsonData);
console.log("Number of students:", students.length);
const passed = students.filter((s) => s.marks >= 40);
console.log("Passed:", passed.map((s) => s.name).join(", "));
students.push({ id: 4, name: "Neha", marks: 84 });
students[2].marks = 52;
const average = students.reduce((t, s) => t + s.marks, 0) / students.length;
console.log("Average marks:", average);
console.log("Updated JSON:");
console.log(JSON.stringify(students, null, 2));