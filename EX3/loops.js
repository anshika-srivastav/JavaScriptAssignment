// Task 2: for, while, do...while, for...of, for...in, break and continue
console.log("--- for loop: table of 5 ---");
for (let i = 1; i <= 5; i++) console.log(`5 x ${i} = ${5 * i}`);
console.log("--- while loop: sum of 1 to 10 ---");
let n = 1, sum = 0;
while (n <= 10) { sum += n; n++; }
console.log("Sum =", sum);
console.log("--- do...while: runs at least once ---");
let k = 10;
do { console.log("k =", k); k++; } while (k < 10);
console.log("--- for...of and for...in ---");
const fruits = ["apple", "banana", "mango"];
for (const f of fruits) console.log("of:", f);
for (const i in fruits) console.log("in:", i, fruits[i]);
console.log("--- break and continue ---");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // skip even numbers
  if (i > 7) break; // stop after 7
  console.log("odd:", i);
}