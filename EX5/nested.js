// Task 3: nested arrays (matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("matrix[1][2] =", matrix[1][2]);
console.log("Rows of the matrix:");
for (const row of matrix) console.log(row.join(" "));
let total = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) total += matrix[i][j];
}
console.log("Sum of all elements =", total);
let diagonal = 0;
for (let i = 0; i < matrix.length; i++) diagonal += matrix[i][i];
console.log("Sum of the main diagonal =", diagonal);
const transpose = matrix[0].map((_, c) => matrix.map((row) => row[c]));
console.log("Transpose:");
for (const row of transpose) console.log(row.join(" "));
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat():", nested.flat());
console.log("flat(Infinity):", nested.flat(Infinity));
console.log("Row sums:", matrix.map((row) => row.reduce((a, b) => a + b, 0)));