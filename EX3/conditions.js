// Task 1: if...else, switch and leap-year check
function grade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 75) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 40) return "C";
  else return "Fail";
}
for (const m of [95, 80, 65, 45, 20]) {
  console.log("Marks", m, "-> Grade", grade(m));
}
function dayType(n) {
  switch (n) {
    case 1: case 2: case 3: case 4: case 5:
      return "Weekday";
    case 6: case 7:
      return "Weekend";
    default:
      return "Invalid day number";
  }
}
for (const d of [1, 5, 6, 9]) console.log("Day", d, "->", dayType(d));
for (const year of [2024, 2026, 2100, 2000]) {
  const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  console.log(year, leap ? "is a leap year" : "is not a leap year");
}