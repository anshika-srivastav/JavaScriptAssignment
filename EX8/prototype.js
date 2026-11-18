// Task 2: prototype-based inheritance with Object.create
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function () {
  return `${this.name} the ${this.breed} barks.`;
};
Dog.prototype.fetch = function () {
  return `${this.name} fetches the ball.`;
};
const a = new Animal("Generic animal");
const d = new Dog("Bruno", "Labrador");
console.log(a.speak());
console.log(d.speak());
console.log(d.fetch());
console.log("d instanceof Animal:", d instanceof Animal);
const vehicle = { wheels: 4, move() { return "The vehicle moves."; } };
const bike = Object.create(vehicle);
bike.wheels = 2;
console.log("bike.wheels:", bike.wheels, "| bike.move():", bike.move());
console.log("Own property wheels:", Object.hasOwn(bike, "wheels"));