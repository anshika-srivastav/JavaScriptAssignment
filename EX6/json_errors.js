// Task 3: handling invalid JSON, replacer and reviver
const bad = '{ "name": "Anshika", "city": }';
try {
  JSON.parse(bad);
} catch (error) {
  console.log("Invalid JSON caught:", error.name);
}
const withDate = { title: "Lab file", created: new Date(Date.UTC(2026, 10, 2)), secret: "1234" };
const json = JSON.stringify(withDate, (key, value) => (key === "secret" ? undefined : value));
console.log("Without secret:", json);
const revived = JSON.parse(json, (key, value) => (key === "created" ? new Date(value) : value));
console.log("created is a Date:", revived.created instanceof Date);
console.log("Year:", revived.created.getUTCFullYear());
console.log(JSON.stringify({ a: undefined, b: () => 1, c: NaN, d: [undefined] }));