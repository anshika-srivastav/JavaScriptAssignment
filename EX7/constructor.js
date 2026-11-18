// Task 1: constructor function and prototype
function Student(name, roll) {
  this.name = name;
  this.roll = roll;
}
Student.prototype.introduce = function () {
  return `I am ${this.name}, roll number ${this.roll}.`;
};
const s1 = new Student("Aman", 101);
const s2 = new Student("Riya", 102);
console.log(s1.introduce());
console.log(s2.introduce());
console.log("s1 instanceof Student:", s1 instanceof Student);
console.log("Same method shared:", s1.introduce === s2.introduce);
console.log("s1.constructor.name:", s1.constructor.name);
console.log("hasOwnProperty('name'):", s1.hasOwnProperty("name"));
console.log("hasOwnProperty('introduce'):", s1.hasOwnProperty("introduce"));