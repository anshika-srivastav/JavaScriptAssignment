// Task 2: array and object destructuring
const colors = ["red", "green", "blue", "yellow"];
const [first, second, ...others] = colors;
console.log(first, second, others);
let x = 1, y = 2;
[x, y] = [y, x];
console.log("After swap: x =", x, ", y =", y);
const user = {
  id: 7,
  name: "Riya",
  address: { city: "Delhi", pin: 110001 },
  skills: ["JS", "CSS"]
};
const { name, id: userId, role = "student" } = user;
console.log(name, userId, role);
const { address: { city }, skills: [mainSkill] } = user;
console.log(city, mainSkill);
function showUser({ name, address: { city } = {}, age = "not given" }) {
  return `${name} | ${city} | age: ${age}`;
}
console.log(showUser(user));
const [a = 10, b = 20] = [5];
console.log("Defaults:", a, b);