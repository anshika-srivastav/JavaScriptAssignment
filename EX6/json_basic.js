// Task 1: JSON.stringify and JSON.parse
const student = {
  name: "Anshika Srivastav",
  semester: 3,
  subjects: ["HTML", "CSS", "JavaScript"],
  address: { city: "Bareilly", state: "Uttar Pradesh" },
  active: true,
  hostel: null
};
const text = JSON.stringify(student);
console.log("JSON text:", text);
console.log("Type :", typeof text);
const copy = JSON.parse(text);
console.log("Name :", copy.name);
console.log("City :", copy.address.city);
console.log("2nd subject:", copy.subjects[1]);
console.log("Pretty print:");
console.log(JSON.stringify(student, null, 2));
console.log("Only some keys:", JSON.stringify(student, ["name", "semester"]));