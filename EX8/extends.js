// Task 1: inheritance with extends and super, method overriding
class Person {
  constructor(name) { this.name = name; }
  describe() { return `${this.name} is a person.`; }
}
class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
  describe() {
    return `${super.describe()} Studies ${this.course}.`;
  }
}
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
  describe() { return `${this.name} teaches ${this.subject}.`; }
}
const people = [new Person("Mohan"), new Student("Anshika", "B.Tech CSE"), new Teacher("Nitish", "Web Development")];
for (const p of people) console.log(p.describe());
const st = people[1];
console.log("st instanceof Student:", st instanceof Student);
console.log("st instanceof Person:", st instanceof Person);
console.log("Prototype chain ok:", Object.getPrototypeOf(Student.prototype) === Person.prototype);