// Task 3: small utility functions
function isPalindrome(text) {
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}
function celsiusToFahrenheit(c) { return (c * 9) / 5 + 32; }
function areaOfCircle(r) { return Math.PI * r * r; }
function countVowels(text) { return (text.match(/[aeiou]/gi) || []).length; }
function largest(a, b, c) { return Math.max(a, b, c); }
function reverseString(text) { return [...text].reverse().join(""); }

console.log("isPalindrome('Madam') :", isPalindrome("Madam"));
console.log("isPalindrome('A man, a plan') :", isPalindrome("A man, a plan"));
console.log("celsiusToFahrenheit(37) :", celsiusToFahrenheit(37));
console.log("areaOfCircle(5) :", areaOfCircle(5).toFixed(2));
console.log("countVowels('JavaScript') :", countVowels("JavaScript"));
console.log("largest(12, 45, 31) :", largest(12, 45, 31));
console.log("reverseString('JavaScript') :", reverseString("JavaScript"));