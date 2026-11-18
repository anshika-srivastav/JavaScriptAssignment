// Task 3: debounce, throttle and a delay helper
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= limit) { last = now; fn(...args); }
  };
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const search = debounce((text) => console.log("Debounced search for:", text), 100);
search("j"); search("ja"); search("jav"); search("java");

const log = throttle((n) => console.log("Throttled call", n), 100);
for (let i = 1; i <= 5; i++) log(i);

(async () => {
  await wait(250);
  console.log("Waited 250 ms using a Promise-based delay");
})();