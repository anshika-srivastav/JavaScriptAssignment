// Task 2: some, every, find and findIndex
const ages = [16, 21, 18, 25, 14];
console.log("some(age >= 18) :", ages.some((a) => a >= 18));
console.log("every(age >= 18):", ages.every((a) => a >= 18));
console.log("some(age > 60) :", ages.some((a) => a > 60));
console.log("every(age > 10) :", ages.every((a) => a > 10));
console.log("[].every(...) :", [].every((a) => a > 10));
console.log("[].some(...) :", [].some((a) => a > 10));

const cart = [
  { item: "Pen", price: 10, stock: 5 },
  { item: "Book", price: 250, stock: 0 },
  { item: "Bag", price: 700, stock: 3 }
];
console.log("All items in stock?:", cart.every((c) => c.stock > 0));
console.log("Any item above 500?:", cart.some((c) => c.price > 500));
console.log("First out of stock:", cart.find((c) => c.stock === 0).item);
console.log("Index of the bag :", cart.findIndex((c) => c.item === "Bag"));