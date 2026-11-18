// Task 3: map, filter and reduce chained together
const products = [
  { name: "Laptop", price: 55000, qty: 1, category: "electronics" },
  { name: "Mouse", price: 500, qty: 2, category: "electronics" },
  { name: "Notebook", price: 60, qty: 10, category: "stationery" },
  { name: "Pen", price: 10, qty: 25, category: "stationery" }
];
const names = products.map((p) => p.name.toUpperCase());
console.log("Names:", names);

const withTotal = products.map((p) => ({ ...p, total: p.price * p.qty }));
console.log("Totals:", withTotal.map((p) => `${p.name}=${p.total}`).join(", "));

const grandTotal = withTotal.reduce((sum, p) => sum + p.total, 0);
console.log("Grand total:", grandTotal);

const stationeryCost = products
  .filter((p) => p.category === "stationery")
  .map((p) => p.price * p.qty)
  .reduce((a, b) => a + b, 0);
console.log("Stationery cost:", stationeryCost);

const discounted = products.map((p) => ({ name: p.name, price: p.price * 0.9 }));
console.log("After 10% discount:", discounted.map((p) => p.name + " " + p.price).join(", "));