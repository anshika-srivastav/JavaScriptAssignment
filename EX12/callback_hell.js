// Task 3: nested callbacks and how to flatten them
function step(name, callback) {
  setTimeout(() => { console.log("Finished", name); callback(); }, 30);
}
console.log("Nested callbacks:");
step("step 1", () => {
  step("step 2", () => {
    step("step 3", () => {
      console.log("All steps done (nested)");
      runFlat();
    });
  });
});

function runFlat() {
  console.log("Flattened with named functions:");
  function one() { step("step A", two); }
  function two() { step("step B", three); }
  function three() { step("step C", done); }
  function done() { console.log("All steps done (flat)"); }
  one();
}