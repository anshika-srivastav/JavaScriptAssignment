// Task 3: a simple calculator using a function and switch
function calculate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "Error: please enter valid numbers";
  }
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? "Error: division by zero" : a / b;
    case "%": return a % b;
    case "**": return a ** b;
    default: return "Error: unknown operator " + operator;
  }
}
const tests = [
  ["12", "+", "8"], [20, "-", 7.5], [6, "*", 7], [9, "/", 4],
  [9, "/", 0], [17, "%", 5], [2, "**", 10], ["abc", "+", 1], [4, "&", 2]
];
for (const [a, op, b] of tests) {
  console.log(`${a} ${op} ${b} = ${calculate(a, op, b)}`);
}