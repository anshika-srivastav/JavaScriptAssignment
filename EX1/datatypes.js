// Task 2: data types and the typeof operator
let studentName = "Anshika";
let semester = 3;
let price = 99.5;
let isStudent = true;
let nothing = null;
let notAssigned;
let big = 12345678901234567890n;
let id = Symbol("id");
let marks = [80, 90, 85];
let person = { name: "Anshika", city: "Bareilly" };
function hello() {}
console.log("studentName:", typeof studentName);
console.log("semester:", typeof semester);
console.log("price :", typeof price);
console.log("isStudent:", typeof isStudent);
console.log("nothing :", typeof nothing);
console.log("notAssigned :", typeof notAssigned);
console.log("big :", typeof big);
console.log("id :", typeof id);
console.log("marks :", typeof marks, "| Array.isArray:", Array.isArray(marks));
console.log("person :", typeof person);
console.log("hello :", typeof hello);
console.log("0.1 + 0.2 :", 0.1 + 0.2);
console.log("10/0 :", 10/0);
console.log("'abc' * 2:", "abc" * 2);