// Task 1: creating a promise and using then, catch and finally
function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 40) resolve(`Passed with ${marks} marks`);
      else reject(new Error(`Failed with ${marks} marks`));
    }, 50);
  });
}

checkMarks(75)
  .then((message) => { console.log("then:", message); return "next step"; })
  .then((value) => console.log("then:", value))
  .catch((error) => console.log("catch:", error.message))
  .finally(() => console.log("finally: first promise finished"));

checkMarks(30)
  .then((message) => console.log("then:", message))
  .catch((error) => console.log("catch:", error.message))
  .finally(() => console.log("finally: second promise finished"));

console.log("Promises created, waiting for results...");