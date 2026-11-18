// Task 3: patterns, prime numbers, factorial and Fibonacci series
console.log("Star triangle:");
for (let i = 1; i <= 5; i++) console.log("*".repeat(i));
console.log("Number pyramid:");
for (let i = 1; i <= 4; i++) {
  let row = "".repeat(4 - i);
  for (let j = 1; j <= i; j++) row += j + " ";
  console.log(row);
}
const primes = [];
for (let num = 2; num <= 30; num++) {
  let isPrime = true;
  for (let d = 2; d * d <= num; d++) {
    if (num % d === 0) { isPrime = false; break; }
  }
  if (isPrime) primes.push(num);
}
console.log("Primes up to 30:", primes.join(", "));
let fact = 1;
for (let i = 1; i <= 6; i++) fact *= i;
console.log("Factorial of 6 =", fact);
let a = 0, b = 1;
const fib = [];
for (let i = 0; i < 10; i++) { fib.push(a); [a, b] = [b, a + b]; }
console.log("Fibonacci:", fib.join(" "));
let number = 12345, reversed = 0;
while (number > 0) { reversed = reversed * 10 + (number % 10); number = Math.floor(number / 10); }
console.log("Reverse of 12345 =", reversed);